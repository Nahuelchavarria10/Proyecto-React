    import React from 'react'
    import Loan from '../components/Loan'
    import { useAxios } from '../useAxios'
    import { Link, useParams } from 'react-router-dom'
    const Loans = () => {
        const { data, loading, error } = useAxios(`http://localhost:8080/api/clients/1`)
        const { id } = useParams();
        

        return (
            <main className='flex justify-center flex-wrap gap-10 px-10'>
                {
                    data.loans?.map(loan => <Loan key={loan.id} loan={loan} />)
                }
                {error && <h1 className=''>Error Not FOUND</h1>}
                {loading && <li>Loading</li>}
                <article className='flex flex-col justify-center items-center w-[477px] h-[277px] bg-gray-600 text-white p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    {
                        console.log(id)
                    }
                    <Link to={`/ApplyLoan/${data.id}`} className=' text-xl px-10 py-5 border rounded-xl'> Apply loan </Link>
                </article>
            </main>
        )
    }

    export default Loans