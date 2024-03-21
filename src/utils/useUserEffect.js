/* import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/auth.actions'

const useUserEffect = () => {
    const user = useSelector((store) => store.authReducer.user)
    const dispatch = useDispatch()

    const { current } = authActions
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!user.loggedIn && !!token) {
            axios.get("/api/clients/current", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    console.log(res.data);
                    dispatch(current(res.data))
                })
        }
    }, [])

}

export default useUserEffect */