import { RootState } from '../../RootState'
import { connect } from 'react-redux/es/exports'
import { AlertContent, AlertTab, AlertWrapper } from '../../styled/Alert'
import { useEffect } from 'react'

type AlertFrameProps = {
    status: string,
    error: string,
}

export const Alert = ({
    status,
    error,
}: AlertFrameProps): JSX.Element => {
  const alertStatus = window.sessionStorage.getItem('alertStatus')
  useEffect(() => {
    const alertDiv = document.getElementById('alertTab')
    if (error) {
        if (alertDiv) alertDiv.style.backgroundColor = '#ff6347'
    } else {
        if (alertDiv) alertDiv.style.backgroundColor = '#3cb371'
    }
  }, [error])

  return (
    <>
    {(alertStatus && error.length < 1) ? 
    <></>
    :
    <AlertWrapper id='alert'>
        <AlertTab id='alertTab'>
            <AlertContent>
                {error || status}
            </AlertContent>
        </AlertTab>
    </AlertWrapper>
    }
    </>
  )
}


const mapStateToProps = (state: RootState) => {
    return {
        status: state.alertReducer.status,
        error: state.databaseReducer.error,
    }
}

export default connect(mapStateToProps)(Alert)