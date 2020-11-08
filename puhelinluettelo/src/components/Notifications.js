import React from 'react'

const Notifications = ({ message }) => {
    if(message === null){
        return null 
    }

    return (
        <div className="notif">
            {message}
        </div>
    )
}

export default Notifications