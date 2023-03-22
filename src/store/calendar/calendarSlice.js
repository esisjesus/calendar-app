import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { uuidv4Generator } from "../../helpers";

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            {
                title: 'Boss birthday',
                description: 'Buy a cake',
                startTime: new Date(),
                endTime:  addHours(new Date(), 1),
                _id: uuidv4Generator(),
                user: {
                  _id:'123',
                  name: 'Jesus E.'
                },
            }
        ],

        activeEvent: null
    },
    reducers : {
        addEvent: (state, action) => {
            state.events =  [...state.events, action.payload]
            state.activeEvent = null
        },
        updateEvent: (state, action) => {
            state.events = state.events.map(e => e._id === action.payload._id ? action.payload : e )
        },
        activateEvent: (state, action) => {
            state.activeEvent = action.payload
        }
    }
})

export const { addEvent, updateEvent, activateEvent  } = calendarSlice.actions

export default calendarSlice.reducer