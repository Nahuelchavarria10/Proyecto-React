import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/auth.actions'

const Transactions = () => {
    const [addTransaction, setAddTransaction] = useState({ accountOrigin: '', amount: '', AccountDestination: '', description: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const user = useSelector((store) => store.authReducer.user);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { current } = authActions;

    //get clients/current
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

    //POST transactions/
    const handLeTransactions = async (e) => {
        e.preventDefault();
        axios.post('/api/transactions/', addTransaction, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                console.log(res.data)
                navigate('/Accounts')
            }).catch(error=>{
                console.log(error.response);
                if (error.response.status === 403) {
                    setErrorMessage(error.response.data)
                }else{
                    setErrorMessage(error.response.data)
                }
            })
    }
    const handLeInput = (e) => {
        setAddTransaction({ ...addTransaction, [e.target.name]: e.target.value })
    }

    console.log(addTransaction);

    return (
        <main className='w-[80%]'>
                <h1 className='text-3xl font-thin text-center'>Transactions</h1>
                <form onSubmit={handLeTransactions} className='flex flex-col gap-5 py-5 w-11/12 m-auto rounded-xl'>
                    <label className='text-xl '>
                        <span>source account:</span>
                        <div>
                            <select onInput={handLeInput} name='accountOrigin' defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: ACCOUNT</option>
                                {
                                    user.accounts?.map(account => (
                                        <option key={account.id} >{account.number}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span>Account Destination</span>
                        <div>
                            <input type="text" onChange={handLeInput} name='AccountDestination' className='w-full p-2 rounded-md' />
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span>Amount:</span>
                        <div>
                            <input type="number" onChange={handLeInput} name='amount' className='w-full p-2 rounded-md' />
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span>Descriptions:</span>
                        <input type="text" onChange={handLeInput} name='description' className='w-full p-2 rounded-md' />
                    </label>
                    <p className='text-red-500'>{errorMessage}</p>
                    <input type="submit" value="Confirm" className='w-full py-2 text-white text-xl cursor-pointer rounded-md bg-green-500' />
                </form>
        </main>
    )
}

export default Transactions