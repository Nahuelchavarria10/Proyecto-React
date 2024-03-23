import React, { useEffect } from 'react'
import axios from 'axios';
import Logo from "../../public/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions'


const Header = () => {
    const user = useSelector((store) => store.authReducer.user);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const { current } = authActions;

    useEffect(() => {
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

    console.log(user);

    return (
        <>
            <header className=' flex items-center justify-around w-full h-[58px] shadow-header bg-white gap-3'>

                <div className=''>
                    <h3 className='text-lg -ml-3'>
                        Welcome Back
                    </h3>
                    <h3 className='text-[#0bbaef] font-medium'>
                        {user.firstName} {user.lastName}
                    </h3>
                </div>
                <div className='w-[30px] relative top-[2px] text-center text-xs border-solid rounded-full'>
                    <img src={Logo} alt="logo" /> <span className='relative font-semibold right-[2px] top-[-3px]'>Sigma</span>
                </div>
            </header>
        </>
    )
}

export default Header