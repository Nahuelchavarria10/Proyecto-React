import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions'
import { useParams } from 'react-router-dom';
import Account from '../components/Account';

const Movements = (account) => {
    const user = useSelector((store) => store.authReducer.user);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const { id } = useParams();
    const { current } = authActions;

    
    //get clients/current
    useEffect(() => {
        if (!user.loggedIn && !!token) {
            axios.get(`/api/accounts/${id}`, {
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
        <main className='w-[80%] flex flex-col items-center gap-5' >
            <h1 className='text-3xl font-thin text-center'>Movements</h1>
            <table className='font-thin border-1 '>
                <thead>
                    <tr>
                        <th className='border p-1 border-gray-600'>Type</th>
                        <th className='border p-1 border-gray-600 text-end'>Amount</th>
                        <th className='border p-1 border-gray-600'>Data</th>
                        <th className='border p-1 border-gray-600'>Description</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        user.transactions?.map(transaction => {
                            return (<tr key={transaction.id} >
                                <td className='border border-gray-600 p-1'>{transaction.type}</td>
                                <td className='border border-gray-600 p-1 text-end'>{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2})}</td>
                                <td className='border border-gray-600 p-1 text-center'>{new Date(transaction.date).toLocaleDateString()} {new Date(transaction.date).toLocaleTimeString('en-US', { hour: '2-digit', hour12: false, minute: '2-digit' })}</td>
                                <td className='border border-gray-600 p-1 text-center'>{transaction.description}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Movements