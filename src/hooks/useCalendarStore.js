import { useDispatch, useSelector } from "react-redux"
import {  addEvent, updateEvent, activateEvent, deleteEvent, setEvents } from '../store'
import { getDataFromDb, postEventToDb } from "../firebase/db/dbFunctions"
import { useEffect } from "react"

export const useCalendarStore = () => {
    
    const { activeEvent, events } = useSelector( state => state.calendar )
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    
    useEffect(() => {
      getEvents()
    }, [user])
    
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