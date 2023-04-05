import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            username: null,
            id: null
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = {
                username: null,
                id: null
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;