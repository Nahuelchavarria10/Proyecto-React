import React from 'react'
import { Link } from 'react-router-dom'

const Account = ({ account }) => {


    return (
        <>
            <article className='bg-Account flex flex-col gap-1 min-w-64 text-white p-5 rounded-t-md rounded-b-2xl border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>

                <h3 className='text-xl font-thin text-center'> {account.number} </h3>

                <h3 className='text-xl font-thin'>Balance:</h3>
                <h3 className='text-white text-center text-3xl font-thin'>{account.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2})} <span className='text-2xl'>USD</span></h3>

                <div className='m-auto w-full'>
                    <h3 className='text-lg font-thin'>Creation Date: <span className='font-thin pl-8  text-sm'>{account.creationDate}</span>  </h3>
                </div>

                <Link to={`/Movements/${account.id}`} className=" bg-[#2525e39a] text-white text-center px-5 self-center mt-2 py-1 rounded-md hover:bg-[#2525e3d3] transition duration-300">Movements</Link>

            </article>
        </>
    )
}

export default Account