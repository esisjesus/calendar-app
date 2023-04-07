import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui/uiSlice'
import calendarReducer from './calendar/calendarSlice'
import authReducer from './auth/authSlice'

export default configureStore({
    reducer: { 
        ui: uiReducer,
        calendar: calendarReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })


})