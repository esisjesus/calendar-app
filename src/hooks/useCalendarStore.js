import { useDispatch, useSelector } from "react-redux"
import {  addEvent, updateEvent, activateEvent } from '../store'

export const useCalendarStore = () => {
    
    const { activeEvent, events } = useSelector( (state) => state.calendar )

    const dispatch = useDispatch()
    
    const handleAddEvent = (object) => {
        dispatch( addEvent({...object}) ) 
    }

    const handleActivateEvent = (object) => {
        dispatch( activateEvent({...object}) )
    }
    
    const handleUpdateEvent = (object) => {
        dispatch( updateEvent({...object}) ) 
    }
    
    const handleClearActiveEvent = () => {
        dispatch( activateEvent(null) )
    }

    return {
        events, 
        activeEvent,
        handleAddEvent,
        handleUpdateEvent,
        handleActivateEvent,
        handleClearActiveEvent
    }
}

// {
//     title: 'Boss birthday',
//     description: 'Buy a cake',
//     startTime: new Date(),
//     endTime:  addHours(new Date(), 0.5),
//     user: {
//       _id:'123',
//       name: 'Jesus E.'
//     },
// }