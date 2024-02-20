import React, { useState } from 'react'

const Account = ({ account,value }) => {

    return (
        <>
            <article className='pepe flex flex-col w-[477px] h-[277px] text-slate-700 p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <h2 className='text-center'><span className='text-lg font-bold'>Account {account.id}</span></h2>
                <div className='m-auto'>
                    <section className=''>
                        <h3 className='text-2xl font-semibold'> Account Number: {account.number}</h3>
                        <h3 className='text-2xl font-semibold'>Balance: <span className='text-green-400 block text-center'>$ {account.balance}</span></h3>
                        <h3 className='text-2xl font-semibold'>Creation Date: {account.creationDate}</h3>
                    </section>
                    <div className="mt-4 gap-5 flex justify-end">
                        <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300">movements</button>      
                    </div>
                </div>
            </article>
        </>
    )
}

export default Account