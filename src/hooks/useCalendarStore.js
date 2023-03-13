import { useDispatch, useSelector } from "react-redux"

export const useCalendarStore = () => {
    
    const { activateEvent, addEvent, events } = useSelector( (state) => state.calendar )
    const dispatch = useDispatch()
    
    const handleAddEvent = ({title, notes, start, end, user}) => {
        dispatch( addEvent({title, notes, start, end, user}) ) 
    }

    const handleActivateEvent = ({title, notes, start, end, user}) => {
        dispatch( activateEvent({title, notes, start, end, user}) )
    }


    return {
        events, 
        handleAddEvent,
        handleActivateEvent
    }
}

// {
//     title: 'Boss birthday',
//     notes: 'Buy a cake',
//     start: new Date(),
//     end:  addHours(new Date(), 0.5),
//     user: {
//       _id:'123',
//       name: 'Jesus E.'
//     },
// }