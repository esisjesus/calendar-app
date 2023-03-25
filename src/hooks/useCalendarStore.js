import { useDispatch, useSelector } from "react-redux"
import {  addEvent, updateEvent, activateEvent, deleteEvent } from '../store'

export const useCalendarStore = () => {
    
    const { activeEvent, events } = useSelector( (state) => state.calendar )

    const dispatch = useDispatch()
    
    const handleSendForm =  async (object) => {
            //Backend returns something

            if(
                events.find(e => e._id === object._id) !== undefined
            )
            { 
                dispatch( updateEvent({...object}) ) 
            }else
            {
                dispatch( addEvent({...object}) ) 
            }
    }

    const handleDeleteEvent = async(id) => {
        //Backend Returns Something
        dispatch( deleteEvent( id ) )
    }

    const handleActivateEvent = (object) => {
        dispatch( activateEvent({...object}) )
    }
    

    const handleClearActiveEvent = () => {
        dispatch( activateEvent(null) )
    }

    return {
        events, 
        activeEvent,
        handleSendForm,
        handleDeleteEvent,
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