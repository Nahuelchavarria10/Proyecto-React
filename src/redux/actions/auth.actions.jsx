import { createAction } from "@reduxjs/toolkit";

const current = createAction('CURRENT', (data)=>{
    return {
        payload:{
            ...data,
            
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
            
        }
    }
})
const updateAccountMovements = createAction('UPDATE_ACCOUNT_MOVEMENTS', (movements) => {
    return {
        payload: movements
    };
});

const actions = {
    current,
    login,
    logout,
    updateAccountMovements
}

export default actions