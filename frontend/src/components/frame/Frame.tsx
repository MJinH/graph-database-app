import { RootState } from '../../RootState'
import { Dispatch, useEffect, useState } from 'react'
import { Action } from 'redux'
import { connect } from 'react-redux/es/exports'
import { setAlert } from '../../features/alert/AlertSlice'
import { getDatabaseStatus } from '../../features/database/DatabaseSlice'
import { FrameWrapper } from '../../styled/Frame'
import { ServerConnect } from './ServerConnect'
import GraphFrame from './GraphFrame'

type FrameProps = {
    databaseStatus: string,
    updateStatus: (status: string) => void,
    getStatus: () => void,
}

export const Frame = ({
    databaseStatus,
    updateStatus,
    getStatus,
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
        return (
            <GraphFrame />
        )
    }
    if (databaseStatus === 'disconnected') {
        return (
            <ServerConnect />
        )
    }
  }

  return (
    <FrameWrapper>
        {renderPage(databaseStatus)}
    </FrameWrapper>
  )
}


const mapStateToProps = (state: RootState) => {
    return {
        databaseStatus: state.databaseReducer.databaseStatus,
        status: state.alertReducer.status,
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
