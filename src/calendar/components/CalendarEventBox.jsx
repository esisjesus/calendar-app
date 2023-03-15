import React from 'react'

export const CalendarEventBox = (props) => {
    
    const {title, description, startTime, endTime, user} = props.event

    return (
        <>
            <h2 className='font-bold'>{title}</h2>
            <span>{description}</span>
            <span> - {user.name}</span>
        </>
    )
}
