import React from 'react'

const Transaction = ({img}) => {
    return (
        <>
            <h1 className='font-medium py-4 text-4xl text-center'>Make a transaction</h1>
            <form action="" className='flex justify-evenly items-center py-10 gap-5 bg-[#216282] w-11/12 m-auto rounded-3xl'>
                <div className=' flex flex-col justify-around w-1/5 h-[277px]' >
                    <label className='text-xl '>
                        <span className='text-white'> source account: </span>
                        <div>
                            <select name="" id="" defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: VINNO</option>
                                <option value="" >VINN01</option>
                                <option value="" >VINN02</option>
                                <option value="" >VINN03</option>
                            </select>
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span className='text-white'> Amount: </span>
                        <div>
                            <input type="number" name="" id="" className='w-full p-2 rounded-md' />
                        </div>
                    </label>
                    <label className='text-xl'>
                    <span className='text-white'> Descriptions:</span>
                    <input type="text" name="" id="" className='w-full p-2 rounded-md' />
                    </label>
                    <input type="submit" value="confirm transaction" className='bg-blue-500 w-full p-2 text-white text-xl cursor-pointer rounded-md' />
                </div>
                <div className=''>
                    <article className=' w-full h-[277px] bg-gray-500 text-slate-700 mb-5 rounded-md border-2'>
                        <img src={img} alt="" className='w-full h-full object-contain' />
                    </article>
                </div>
            </form>
        </>
    )
}

export default Transaction