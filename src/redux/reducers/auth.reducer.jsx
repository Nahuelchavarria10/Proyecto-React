import { createReducer } from "@reduxjs/toolkit";
import authActions from '../actions/auth.actions'
const { logout, login, current } = authActions

const initialState = {
    user: {
        name: "",
        email: "",
        loggedIn: null
    },
    token: null,
    timestamps: null
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                timestamps: action.payload.timestamps,
            }
        })
        .addCase(current, (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        })
        .addCase(logout, (state, action) => {
            return {
                ...state,
                timestamps: null,
                token: null,
                loggedIn: false
                
            }
        })
})

export default authReducer