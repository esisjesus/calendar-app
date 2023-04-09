import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            username: null,
            id: null, 
        },
        authenticated: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.authenticated = true
        },
        logout: (state) => {
            state.user = {
                username: null,
                id: null
            }
            state.authenticated = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer