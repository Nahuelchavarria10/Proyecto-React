import React, { useEffect, useState } from 'react'
import Loan from '../components/Loan'
import { useAxios } from '../useAxios'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Loans = () => {
    const [loan, setLoans] = useState({});
    
    useEffect(() => {
        axios(`http://localhost:8080/api/clients/1`)
            .then(response => {
                setLoans(response.data);
                console.log("pepe");
            })
            .catch(error => console.log(error));
    }, []);
    console.log(loan);
    

    return (
        <main className='flex justify-center flex-col gap-10 px-10'>
            <div className='flex justify-evenly flex-wrap'>
            {
                loan.loans?.map(loan => <Loan key={loan.id} loan={loan} />)
            }
            </div>
            {/* {error && <h1 className=''>Error Not FOUND</h1>}
                {loading && <li>Loading</li>} */}
            <article className='bg-apply self-center w-full h-1/2 text-center text-black p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <Link to={`/ApplyLoans/${loan.id}`} className=' text-xl px-10 py-5 border-2 rounded-xl'> Apply loan </Link>
            </article>
            
        </main>
    )
}

export default Loans