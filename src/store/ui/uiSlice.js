import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        dateModalIsOpen: false,
    },
    reducers: {
        openDateModal: ( state ) => {
            state.dateModalIsOpen = true
        },
        closeDateModal: ( state ) => {
            state.dateModalIsOpen = false
        }
    }
})

export const { openDateModal, closeDateModal } = uiSlice.actions

export default uiSlice.reducer