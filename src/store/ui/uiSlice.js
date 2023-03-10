import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'modalUI',
    initialState: {
        dateModalIsOpen: true,
    },
    reducers: {
        openDateModal: ( state ) => {
            state.modalIsOpen = true
        },
        closeDateModal: ( state ) => {
            state.modalIsOpen = false
        }
    }
})

export const { openDateModal, closeDateModal } = uiSlice.actions

export default uiSlice.reducer