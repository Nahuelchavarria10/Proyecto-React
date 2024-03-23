import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions'
import { useParams } from 'react-router-dom';

const Movements = (account) => {
    const user = useSelector((store) => store.authReducer.user);
    const accountMovements = useSelector((store) => store.authReducer.accountMovements);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const { id } = useParams();
    const { current, updateAccountMovements } = authActions;

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
                    dispatch(authActions.updateAccountMovements(res.data))
                })
        }
    }, [])

    const getTextColor = (type) => {
        return type === 'CREDIT' ? 'text-green-600 bg-green-100' : ' text-red-600 bg-red-100';
    };



    console.log(user);
    console.log(updateAccountMovements);

    return (
        <main className='w-full py-3 flex flex-col items-center gap-5' >
            
            <table className='font-medium border-1 w-full'>
                <thead>
                    <tr className=' '>
                        <th className='border-b p-1 border-gray-600'>Type</th>
                        <th className='border-b p-1 border-gray-600 text-end'>Amount</th>
                        <th className='border-b p-1 border-gray-600'>Data</th>
                        <th className='border-b p-1 border-gray-600'>Description</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        accountMovements.transactions?.map(transaction => {
                            return (<tr key={transaction.id} className='' >
                                <td className={`${getTextColor(transaction.type)} border-b py-5 border-gray-600 p-1`}>{transaction.type}</td>
                                <td className={`${getTextColor(transaction.type)} border-b border-gray-600 p-1 text-end`}>{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2})}</td>
                                <td className={`${getTextColor(transaction.type)} border-b border-gray-600 p-1 text-center`}>{new Date(transaction.date).toLocaleDateString()} {new Date(transaction.date).toLocaleTimeString('en-US', { hour: '2-digit', hour12: false, minute: '2-digit' })}</td>
                                <td className={`${getTextColor(transaction.type)} border-b  border-gray-600 p-1 text-center`}>{transaction.description}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Movements