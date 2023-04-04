import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui/uiSlice'
import calendarReducer from './calendar/calendarSlice'

export default configureStore({
    reducer: { 
        ui: uiReducer,
        calendar: calendarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })


})