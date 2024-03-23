import React from 'react'
import { Navigate } from 'react-router-dom';
import { decodeJWT } from '../utils/decodeJWT';
import { useSelector } from 'react-redux';


export const withAuth = (Component) => {
    
    const Auth = () => {
        const token = localStorage.getItem('token')

        if (!token){
            return <Navigate to='/Login' />
        }
        const expiration = decodeJWT(token).exp

        if (expiration < Date.now() / 1000) {
            localStorage.removeItem('token')
            return <Navigate to='/Login' />
        }

        return <Component />

    }
    return Auth
}
