import axios from 'axios'
import React, { useState } from 'react'
import Logo from "../../public/logo.png"
import Messibanner from "../../public/messi-banner.png"
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
        <main className='h-full max-w-[1440px] m-auto bg-[#75dfff]'>

            <div className='bg-[#] py-10 text-center w-full h-1/2'> 
                <h1 className='text-white font-bold text-4xl'>
                    Sigma Elite Bank <img src={Logo} className='m-auto py-3' alt="logo" />
                </h1>
                <h2 className='text-white font-medium text-xl'>
                    Logging in is the first step
                </h2>
            </div>
            <div className='bg-apply flex h-full'>

                <div className='bg-[url("../../public/messi-banner.png")] bg-[center] w-1/2 bg-cover bg-no-repeat'>
                    {/* <img src={Messibanner} className='w-full' alt="messi-banner" /> */}
                </div>
                <form onSubmit={handLeSingIn} className='flex flex-col py-5 justify-center items-center gap-5 w-1/2'>
                    <label htmlFor="email">Email <br />
                        <input onInput={handLeInput} name="email" className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="email" id="email" placeholder='hello@example.com' />
                    </label>
                    <label htmlFor="password">Password <br />
                        <input onInput={handLeInput} name="password" className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="password" id="password" placeholder='Password' />
                    </label>
                    <p className='text-red-500'>{errorMessage}</p>
                    <input type="submit" value="Sing In" className='bg-[#009E23] px-[89px] py-2 rounded-md text-white' />
                    <p className=''>Don't have an account? <Link to={`/SingUp`} className='text-blue-500'>Sing Up</Link> </p>
                </form>
            </div>


        </main>
    )
}
export default Login