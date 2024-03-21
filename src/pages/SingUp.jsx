import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
        <section className='flex flex-col  items-center h-screen m-auto bg-[#2625e3]'>

            <div className='bg-[#000000] py-10 text-center w-full h-1/3'>
                <h1 className='text-white font-bold text-4xl'>
                    Sing Up
                </h1>
                <h2 className='text-white font-medium text-xl'>
                    Gestiona tus finanzas de forma segura y conveniente. ¡Es la manera más fácil de llevar el control de tu dinero!"
                </h2>
            </div>
            <div className='bg-white w-full h-full '>
                <h1 className='text-center '>Sign Up</h1>
                <form onSubmit={handLeSingUp} className='flex flex-col py-5 justify-center items-center gap-5'>
                    <label htmlFor="email">First Name <br />
                        <input onInput={handLeInput} name="firstName" className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="text" id="firstName" placeholder='First Name ' />
                    </label>
                    <label htmlFor="password">Last Name <br />
                        <input onInput={handLeInput} name="lastName" className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="text" id="lastName" placeholder='Last Name' />
                    </label>
                    <label htmlFor="email">Email <br />
                        <input onInput={handLeInput} name="email" className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="email" id="email" placeholder='hello@example.com' />
                    </label>
                    <label htmlFor="password">Password <br />
                        <input onInput={handLeInput} name="password" className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="password" id="password" placeholder='Password' />
                    </label>
                    <p className='text-red-500'>{errorMessage}</p>
                    <input type="submit" value="Sing Up" className='bg-[#009E23] px-[89px] py-2 rounded-md text-white' />
                    <p className=''>Already have an account? <Link to={`/Login`} className='text-blue-500'>Sing In</Link> </p>
                </form>
            </div>

        </section>
    )
}

export default SingUp