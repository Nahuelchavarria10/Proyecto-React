import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Account = ({ account }) => {

    return (
        <>
            <article className='bg-Account flex flex-col gap-2 w-[400px] h-1/3 text-white p-5 rounded-t-md rounded-b-2xl  border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>

                <h3 className='text-2xl font-thin text-center'> {account.number} </h3>

                <h3 className='text-2xl font-thin'>Balance:</h3>
                <h3 className='text-white text-5xl font-thin'>$ {account.balance} <span className='text-2xl'>USD</span></h3>

                <div>
                    <h3 className='text-2xl font-thin'>Creation Date:</h3>
                    <h3 className=''>{account.creationDate}</h3>
                </div>

                <Link to={`/Movements/`} className=" bg-[#2525e39a] text-white text-center px-8 self-center py-2 rounded-md hover:bg-[#2525e3d3] transition duration-300">Movements</Link>

            </article>
        </>
    )
}

export default Account