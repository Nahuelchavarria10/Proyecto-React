import { createAction } from "@reduxjs/toolkit";

const current = createAction('CURRENT', (data)=>{
    return {
        payload:{
            ...data,
            loggeIn: true,
        }
    }
})

const login = createAction('LOGIN', (token)=>{
    localStorage.setItem('token',token)
    return {
        payload:{
            token,
            timestamps: Date.now()
        }
    }
})
const logout = createAction('LOGOUT', ()=>{
    localStorage.removeItem('token')
    return {
        payload:{
            loggeIn: false
        }
    }
})

const actions = {
    current,
    login,
    logout
}

export default actions