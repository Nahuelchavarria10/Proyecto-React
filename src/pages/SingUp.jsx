import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../public/logo.png"
import authActions from '../redux/actions/auth.actions'
import axios from 'axios';

const SingUp = () => {
    const [userRegister, setUserRegister] = useState({ email: '', password: '', firstName: '', lastName: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { login } = authActions;
    localStorage.removeItem('token')


    const handLeSingUp = async (e) => {
        e.preventDefault()
        axios.post('/api/auth/register', userRegister)
            .then(res => {
                if (res.data === "Registered") {
                    const userdata = { email: userRegister.email, password: userRegister.password };
                    axios.post("/api/auth/login", userdata)
                        .then(res => {
                            dispatch(login(res.data))
                            navigate('/Accounts')
                            console.log(res.data)
                        })
                }
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.status === 403) {
                    setErrorMessage(error.response.data)
                } else {
                    setErrorMessage(error.response.data)
                }
            })
    }

    const handLeInput = (e) => {
        setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
    }
    console.log(userRegister);

    return (
        <main className='bg-login flex flex-col min-h-screen min-w-full '>

            <div className='pt-5 text-center w-full'>
                <div>
                    <h1 className='flex justify-center items-center gap-3 py-2 text-white font-medium text-4xl'>
                        Sigma Elite Bank
                        <img src={Logo} className='w-10' alt="logo" />
                    </h1>
                </div>
                <h2 className='text-white font-normal w-3/4 m-auto text-base'>
                    Register now and start enjoying the benefits!
                </h2>
            </div>
            <div className=''>

                <form onSubmit={handLeSingUp} className='flex flex-col justify-center gap-3 w-2/3 sm:w-1/2 m-auto py-5'>
                    <label className='text-white font-normal text-lg' htmlFor="email">First Name
                        <input onInput={handLeInput} name="firstName" className='w-full py-2 rounded-md border-2 text-black border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="text" id="firstName" placeholder='First Name ' />
                    </label>
                    <label className='text-white font-normal text-lg' htmlFor="password">Last Name
                        <input onInput={handLeInput} name="lastName" className='w-full py-2 rounded-md border-2 text-black border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="text" id="lastName" placeholder='Last Name' />
                    </label>
                    <label className='text-white font-normal text-lg' htmlFor="email">Email
                        <input onInput={handLeInput} name="email" className='w-full py-2 rounded-md border-2 text-black border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="email" id="email" placeholder='hello@example.com' />
                    </label>
                    <label className='text-white font-normal text-lg' htmlFor="password">Password
                        <input onInput={handLeInput} name="password" className='w-full py-2 rounded-md border-2 text-black border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="password" id="password" placeholder='Password' />
                    </label>
                    <p className='text-red-500 font-normal'>{errorMessage}</p>
                    <input type="submit" value="Sing Up" className='bg-[#009E23] w-full py-2 rounded-md text-white font-semibold' />
                    <p className='text-white'>Already have an account? <Link to={`/Login`} className='text-[#42e064] text-base font-semibold border-b border-green-500'>Sing In</Link> </p>
                </form>
            </div>

        </main>
    )
}

export default SingUp