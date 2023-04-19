import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { uuidv4Generator } from "../../helpers";

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            
        ],

        activeEvent: null
    },
    reducers : {
        addEvent: (state, action) => {
            state.events =  [ ...state.events, {...action.payload, startTime: new Date(action.payload.startTime), endTime: new Date(action.payload.endTime) } ]
            state.activeEvent = null
        },
        updateEvent: (state, action) => {
            state.events = state.events.map(e => e._id === action.payload._id ? action.payload : e )
        },
        deleteEvent: ( state, action ) => {
            state.events = state.events.filter( e => e._id !== action.payload )
        },
        activateEvent: (state, action) => {
            state.activeEvent = action.payload
        },
        setEvents : (state, action) => {
            state.events =  action.payload.map(e => {
                return {...e, startTime: new Date(e.startTime), endTime: new Date(e.endTime)}
            })
        }
    }
})

export const { addEvent, updateEvent, deleteEvent, activateEvent, setEvents  } = calendarSlice.actions

export default calendarSlice.reducer