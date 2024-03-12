import React from 'react'

const Loan = ({ loan }) => {
    return (
        <>
            <article className='bg-Loan w-[400px] h-1/3 text-2xl text-white p-5 rounded-2xl border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <h2 className='text-center'><span className='text-lg font-medium'>{loan.loanName}</span></h2>

                <div className='flex justify-between'>
                    <div>
                        <h3></h3>
                        <h3 className='font-thin'> Loan Name: </h3>
                        <span className=''>{loan.loanName}</span>
                    </div>
                    <div>
                        <h3 className='font-thin'>Amount: </h3>
                        <span className=' text-3xl'>$ {loan.amount}</span>
                    </div>
                </div>

                <h3 className='font-thin text-center'>Payments: {loan.payments}</h3>
            </article>
        </>
    )
}

export default Loan