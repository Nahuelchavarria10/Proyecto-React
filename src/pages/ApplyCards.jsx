import React, { useEffect, useState } from 'react'
import Chip from '../../public/chip.png'
import pepe from '../../public/pepe.jpeg'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ApplyCards = () => {
    const [addCard, setAddCard] = useState({ cardType: '', cardColor: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();


    //POST current/applyCard
    const handLeCards = async (e) => {
        e.preventDefault();
        axios.post('/api/cards/current/applyCard', addCard, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                console.log(res.data)
                navigate('/Cards')
            })
            .catch(error=>{
                console.log(error.response);
                if (error.response.status === 403) {
                    setErrorMessage(error.response.data)
                }else{
                    setErrorMessage(error.response.data)
                }
            })
    }

    const handLeInput = (e) => {
        setAddCard({ ...addCard, [e.target.name]: e.target.value })
    }
    console.log(addCard);


    return (
        <main className='w-[80%]'>
            <h1 className='text-3xl font-thin text-center'>Transactions</h1>
            <form onSubmit={handLeCards} className='flex flex-col gap-5 py-5 w-11/12 m-auto rounded-xl'>
                    <label className='text-xl '>
                        <span className=''> Select card type </span>
                        <div>
                            <select onInput={handLeInput} name='cardType' defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: CREDIT</option>
                                <option value="CREDIT" >CREDIT</option>
                                <option value="DEBIT" >DEBIT</option>
                            </select>
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span className=''> Select card membership </span>
                        <div>
                            <select onInput={handLeInput} name='cardColor' defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: GOLD</option>
                                <option value="SILVER" > SILVER</option>
                                <option value="GOLD" > GOLD</option>
                                <option value="TITANIUM" > TITANIUM</option>
                            </select>
                        </div>
                    </label>
                    <p className='text-red-500'>{errorMessage}</p>
                    <input type="submit" value="Apply" className='bg-green-500 w-full p-2 text-white text-xl cursor-pointer rounded-md' />
            </form>
        </main>
    )
}

export default ApplyCards