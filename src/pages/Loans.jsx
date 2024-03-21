import React, { useEffect, useState } from 'react'
import Loan from '../components/Loan'
import { useAxios } from '../useAxios'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/auth.actions'

const Loans = () => {
    const user = useSelector((store) => store.authReducer.user);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const { current } = authActions;

    //get client/current
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

    return (
        <main className='flex flex-col items-center gap-5 px-10 '>
            <h1 className='text-3xl font-thin'>Loans</h1>
            {
                user.loans?.map(loan => <Loan key={loan.id} loan={loan} />)
            }
            <article className='bg-apply self-center w-full text-center text-black p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <Link to={`/ApplyLoans/${user.id}`} className='text-xl'> Apply loan </Link>
            </article>
        </main>
    )
}

export default Loans