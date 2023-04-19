import { useDispatch, useSelector } from "react-redux"
import {  addEvent, updateEvent, activateEvent, deleteEvent, setEvents } from '../store'
import { getDataFromDb, postEventToDb, removeEventFromDb } from "../firebase/db/dbFunctions"
import { useEffect } from "react"
import { useUiState } from "./useUiState"

export const useCalendarStore = () => {
    
    const { activeEvent, events } = useSelector( state => state.calendar )
    const {handleCloseModal} = useUiState()
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    
    useEffect(() => {
      getEvents()
    }, [])
    
    const getEvents = async() => {

        const events = await getDataFromDb(user.uid)
        events && dispatch( setEvents( Object.values(events) ) )

    }

    const handleSendForm =  async (object) => {
        try {
            await postEventToDb({...object})

        } catch (error) {
            console.error(error)
            return new Error(error)
        }
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

    const handleDeleteEvent = async(userID, eventID) => {
        try{
            removeEventFromDb(userID, eventID)
        } catch (error) {
            console.error(error)
            return new Error(error)
        }

        dispatch( deleteEvent( eventID ) )
        dispatch(activateEvent(null))
        handleCloseModal()
        
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