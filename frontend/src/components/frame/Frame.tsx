import { RootState } from '../../RootState'
import { Dispatch, useEffect, useState } from 'react'
import { Action } from 'redux'
import { connect } from 'react-redux/es/exports'
import { setAlert } from '../../features/alert/AlertSlice'
import { getDatabaseStatus } from '../../features/database/DatabaseSlice'
import { FrameGlobalWrapper, FrameWrapper } from '../../styled/Frame'
import { ServerConnect } from './ServerConnect'
import { GraphFrame } from './GraphFrame'

type FrameProps = {
    databaseStatus: string,
    updateStatus: (status: string) => void,
    getStatus: () => void,
    refKeys: any,
    refKey: string,
}

export const Frame = ({
    databaseStatus,
    updateStatus,
    getStatus,
    refKeys,
    refKey,
}: FrameProps): JSX.Element => {

  useEffect(() => {
    if (databaseStatus === 'disconnected')  {
        getStatus()
    }
    if (databaseStatus === 'connected') {
        window.sessionStorage.setItem('databaseStatus', databaseStatus)
        updateStatus('Successfully connected to the database.')
        const alertDiv = document.getElementById('alert')
        setTimeout(() => {
            if (alertDiv) alertDiv.style.display = 'none'
            window.sessionStorage.setItem('alertStatus', 'removed')
        }, 5000)
    }
  }, [databaseStatus])

  const renderPage = (databaseStatus: string) => {
    const status = window.sessionStorage.getItem('databaseStatus')
    if (databaseStatus === 'connected' || status === 'connected') {
        if (refKeys) {
            const canvas = refKeys?.map((frame: any, index: number) => {
                return (
                    <GraphFrame 
                      key={index}
                      rows={frame.rows}
                      command={frame.command}
                      rowCount={frame.rowCount}
                      index={index}
                      refKey={frame.refKey}
                    />
                )
            })
            return (
              <>
                {canvas}
              </>
            )
        }
    }
    if (databaseStatus === 'disconnected') {
        return (
            <FrameWrapper>
                <ServerConnect />
            </FrameWrapper>
        )
    }
  }

  return (
    <>
      <FrameGlobalWrapper className='globalFrameWrapper'>
        {renderPage(databaseStatus)}
      </FrameGlobalWrapper>
    </>
  )
}


const mapStateToProps = (state: RootState) => {
    return {
        databaseStatus: state.databaseReducer.databaseStatus,
        status: state.alertReducer.status,
        refKey: state.cypherReducer.refKey,
        refKeys: state.cypherReducer.refKeys,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateStatus: (status: string) => {
            dispatch(setAlert({ status }))
        },
        getStatus: () => {
            dispatch(getDatabaseStatus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame)
