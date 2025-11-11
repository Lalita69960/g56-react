import React from 'react'

const AlertMessage = ({icon, message, alertType}) => {
  return (
    <div className={`alert ${alertType}`}>

        {icon && <span className='me-2'>{icon}</span>}
        {message}
    </div>
  )
}

export default AlertMessage