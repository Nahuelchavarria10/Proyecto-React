import React, { useEffect, useState } from 'react'
import Chip from '../../public/chip.png'
import pepe from '../../public/pepe.jpeg'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApplyCards = () => {

    const [client, setClient] = useState([]);

    useEffect(() => {
        axios(`http://localhost:8080/api/clients/1`)
            .then(response => {
                setClient(response.data);
                console.log(client);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h1 className='font-medium py-4 text-4xl text-center'>Apply for card</h1>
            <form action="" className='flex justify-evenly items-center py-10 gap-5 bg-apply w-11/12 m-auto rounded-3xl'>
                <div className=' flex flex-col justify-around w-1/5 h-[277px]' >
                    <label className='text-xl '>
                        <span className=''> Select card type </span>
                        <div>
                            <select defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: CREDIT</option>
                                <option value="CREDIT" >CREDIT</option>
                                <option value="DEBIT" >DEBIT</option>
                            </select>
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span className=''> Select card membership </span>
                        <div>
                            <select defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: GOLD</option>
                                <option value="SILVER" > SILVER</option>
                                <option value="GOLD" > GOLD</option>
                                <option value="TITANIUM" > TITANIUM</option>
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Apply" className='bg-green-500 w-full p-2 text-white text-xl cursor-pointer rounded-md' />
                </div>
            </form>
        </>
    )
}

export default ApplyCards