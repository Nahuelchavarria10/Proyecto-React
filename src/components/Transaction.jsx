import React from 'react'

const Transaction = ({img, clients}) => {
    return (
        <>
            <h1 className='font-medium py-4 text-4xl text-center'>Make a transaction</h1>
            <form action="" className='flex justify-evenly items-center py-10 gap-5 bg-apply w-11/12 m-auto rounded-3xl'>
                <div className=' flex flex-col justify-around w-1/5 h-[277px]' >
                    <label className='text-xl '>
                        <span className=''> source account: </span>
                        <div>
                            <select name="" id="" defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: ACCOUNT</option>
                                {
                                    clients.accounts?.map(account => (
                                        <option key={account.id} >{account.number}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span className=''> Amount: </span>
                        <div>
                            <input type="number" name="" id="" className='w-full p-2 rounded-md' />
                        </div>
                    </label>
                    <label className='text-xl'>
                    <span className=''> Descriptions:</span>
                    <input type="text" name="" id="" className='w-full p-2 rounded-md' />
                    </label>
                    <input type="submit" value="Confirm" className='bg-blue-500 w-full p-2 text-white text-xl cursor-pointer rounded-md' />
                </div>
            </form>
        </>
    )
}

export default Transaction