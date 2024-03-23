import { createReducer } from "@reduxjs/toolkit";
import authActions from '../actions/auth.actions'
const { logout, login, current,updateAccountMovements } = authActions

const initialState = {
    user: {
        name: "",
        email: "",
    },
    token: null,
    timestamps: null,
    loggedIn: false,
    accountMovements: [],
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            return {
                ...state,
                token: action.payload.token,
                timestamps: action.payload.timestamps,
                loggedIn: true
            }
        })
        .addCase(current, (state, action) => {
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        })
        .addCase(updateAccountMovements, (state, action) => {
            return {
                ...state,
                accountMovements: action.payload,
            };
        })
        .addCase(logout, (state, action) => {
            return initialState
        })
})

export default authReducer