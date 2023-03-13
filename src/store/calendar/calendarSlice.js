import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            {
                title: 'Boss birthday',
                notes: 'Buy a cake',
                start: new Date(),
                end:  addHours(new Date(), 0.5),
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
            state.events.push(action.payload)
        },
        activateEvent: (state, action) => {
            state.activeEvent = action.payload
        }
    }
})

export const { addEvent, activateEvent  } = calendarSlice.actions

export default calendarSlice.reducer