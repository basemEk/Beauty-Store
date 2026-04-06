import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    
    initialState: {
        currentUser: null,      //no user logged in initially
        isFetching: false,      //no API call running
        error: false
    },

    reducers: {                     //Reducers define how state changes
        loginStart: (state) => {        
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = true;
            state.currentUser = action.payload;     //action.payload = fetch user data from backend
            state.error = false;
        },
        loginFailture: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
        state.currentUser = null;
        state.isFetching = false;
        state.error = false;
    }
    }
});

export const { loginStart, loginSuccess, loginFailture, logout } = userSlice.actions;
export default userSlice.reducer;