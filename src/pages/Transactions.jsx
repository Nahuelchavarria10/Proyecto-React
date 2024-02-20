import React from 'react'
import Transaction from '../components/Transaction'
import { useAxios } from '../useAxios'
import Img from '../../public/transaccion.jpeg'

const Transactions = () => {
    const { data, loading, error } = useAxios(`http://localhost:8080/api/clients/1`)
    return (
        <main className='flex justify-center flex-wrap gap-10 px-10'>

            {error && <h1>Error: {error}</h1>}
            {loading && <li>Loading</li>}
            {
                <Transaction img = {Img}/>  
            }
        </main>
    )
}

export default Transactions