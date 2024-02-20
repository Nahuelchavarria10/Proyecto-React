import React from 'react'

const Loan = ({loan}) => {
    return (
        <>
            <article className='pepe flex flex-col w-[477px] h-[277px] text-slate-700 p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <h2 className='text-center'><span className='text-lg font-bold'>Loan {loan.id}</span></h2>
                <div className='m-auto'>
                    <section className=''>
                        <h3 className='text-2xl font-semibold'> Loan Name: <span className='text-blue-600'>{loan.loanName}</span></h3>
                        <h3 className='text-2xl font-semibold'>Amount: <span className='text-green-400 text-center'>$ {loan.amount}</span></h3>
                        <h3 className='text-2xl font-semibold'>Payments: {loan.payments}</h3>
                    </section>
                </div>
            </article>
        </>
    )
}

export default Loan