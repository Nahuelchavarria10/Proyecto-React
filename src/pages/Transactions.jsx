import React, { useEffect, useState } from 'react'
import Transaction from '../components/Transaction'
import { useAxios } from '../useAxios'
import Img from '../../public/transaccion.jpeg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Transactions = () => {
    const [client, setClient] = useState([]);
    //const { id } = useParams();


    useEffect(() => {
        axios(`http://localhost:8080/api/clients/1`)
            .then(response => {
                setClient(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <main className='flex justify-center flex-wrap'>
            {
                <Transaction img = {Img} clients={client}/>  
            }
        </main>
    )
}

export default Transactions