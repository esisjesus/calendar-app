import { useDispatch, useSelector } from "react-redux"
import { addEvent, activateEvent } from '../store'

export const useCalendarStore = () => {
    
    const { activeEvent, events } = useSelector( (state) => state.calendar )
    const dispatch = useDispatch()
    
    const handleAddEvent = ({title, description, startTime, endTime, user}) => {
        dispatch( addEvent({title, description, startTime, endTime, user}) ) 
    }

    const handleActivateEvent = ({title, description, startTime, endTime, user}) => {
        dispatch( activateEvent({title, description, startTime, endTime, user}) )
    }


    return {
        events, 
        activeEvent,
        handleAddEvent,
        handleActivateEvent
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