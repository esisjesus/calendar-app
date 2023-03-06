import React from 'react'

export const CalendarEventBox = (props) => {
    
    const {title, notes, start, end, user} = props.event

    return (
        <>
            <h2 className='font-bold'>{title}</h2>
            <span>{notes}</span>
            <span> - {user.name}</span>
        </>
    )
}
