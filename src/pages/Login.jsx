import axios from 'axios'
import React, { useState } from 'react'
import Logo from "../../public/logo.png"
import { useDispatch } from 'react-redux'
import authActions from '../redux/actions/auth.actions'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const [userData, setuserData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login } = authActions;
    localStorage.removeItem('token')

    //post auth/login
    const handLeSingIn = async (e) => {
        e.preventDefault()
        axios.post("/api/auth/login", userData)
            .then(res => {
                dispatch(login(res.data))
                navigate('/Accounts')
                console.log(res.data);
            }).catch(error => {
                console.log(error.response);
                if (error.response.status === 403) {
                    setErrorMessage(error.response.data)
                } else {
                    setErrorMessage(error.response.data)
                }
            })
    }
    const handLeInput = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value })
        setErrorMessage('')
    }

    console.log(userData);
    return (
        <main className='bg-login flex flex-col min-h-screen min-w-screen'>

            <div className='pt-10 text-center w-full'>
                <h1 className='text-white font-medium text-4xl'>
                    Sigma Elite Bank <img src={Logo} className='m-auto pt-3' alt="logo" />
                </h1>
            </div>
            <div className='min-w-1/'>

                <form onSubmit={handLeSingIn} className='flex flex-col justify-center gap-3 w-2/3 sm:w-1/2 m-auto py-5'>
                    <h2 className='text-white py-2 font-normal text-base text-center'>
                        Manage your finances from anywhere and at any time
                    </h2>
                    <label className='text-white font-normal text-lg' htmlFor="email">
                        <h1>Email</h1>
                        <input onInput={handLeInput} name="email" className='w-full py-2  rounded-md border-2 text-black border-blue-600 hover:border-blue-950 focus:border-blue-950 placeholder-gray-500' type="email" id="email" placeholder='hello@example.com' />
                    </label>
                    <label className='text-white font-normal text-lg' htmlFor="password">
                        <span>Password</span>
                        <input onInput={handLeInput} name="password" className='w-full py-2 rounded-md border-2 text-black border-blue-600 hover:border-blue-950 focus:border-blue-950 placeholder-gray-500' type="password" id="password" placeholder='Password' />
                    </label>
                    <p className='text-red-500 font-medium'>{errorMessage}</p>
                    <input type="submit" value="Sing In" className='bg-[#009E23] w-full py-2 rounded-md font-semibold text-white' />
                    <p className='text-white text-base'>Don't have an account? <Link to={`/SingUp`} className='text-[#42e064] text-base font-semibold border-b border-green-500'>Sing Up</Link> </p>
                </form>

            </div>
        </main>
    )
}
export default Login