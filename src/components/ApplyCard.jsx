import React from 'react'
import Chip from '../../public/chip.png'
import pepe from '../../public/pepe.jpeg'

const ApplyCard = () => {
    return (
        <>
            <h1 className='font-medium py-4 text-4xl text-center'>Apply for card</h1>
            <form action="" className='flex justify-evenly items-center py-10 gap-5 bg-[#216282] w-11/12 m-auto rounded-3xl'>
                <div className=' flex flex-col justify-around w-1/5 h-[277px]' >
                    <label className='text-xl '>
                        <span className='text-white'> Select card type </span>
                        <div>
                            <select name="" id="" defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: CREDIT</option>
                                <option value="" >CREDIT</option>
                                <option value="" >DEBIT</option>
                            </select>
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span className='text-white'> Select card membership </span>
                        <div>
                            <select name="" id="" defaultValue="EJEMPLO" className='w-full p-2 rounded-md'>
                                <option value="EJEMPLO" disabled>Ej: GOLD</option>
                                <option value="">SILVER</option>
                                <option value="">GOLD</option>
                                <option value="">PLATINUM</option>
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Apply" className='bg-green-500 w-full p-2 text-white text-xl cursor-pointer rounded-md' />
                </div>
                <div className=''>
                    <article className=' w-full h-[277px] bg-gray-500 text-slate-700 mb-5 rounded-md border-2'>
                        <img src={pepe} alt="" className='w-full h-full object-contain' />
                    </article>
                </div>
            </form>
        </>
    )
}

export default ApplyCard