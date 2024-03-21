import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/auth.actions'
import { useNavigate } from 'react-router-dom'

const useUserEffect2 = (url,navigateUrl) => {
    const user = useSelector((store) => store.authReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { current } = authActions
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!user.loggedIn && !!token) {
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    console.log(res.data);
                    navigate(navigateUrl)
                    dispatch(current(res.data))
                })
        }
    }, [])

}

export default useUserEffect2