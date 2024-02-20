
import React, { useState } from 'react'

const Apply = ({ title, img, loans, clients }) => {
    const [selectedLoan, setSelectedLoan] = useState("ejemploLoan");
    const filteredLoans = selectedLoan === "ejemploLoan" ? loans : loans.filter(loan => loan.name === selectedLoan);
    return (
        <>
            <h1 className='font-medium py-4 text-4xl text-center'>Apply for {title}</h1>
            <form action="" className='flex justify-evenly items-center py-10 gap-5 bg-[#216282] w-11/12 m-auto rounded-3xl'>
                <div className=' flex flex-col justify-around gap-2 w-1/5 h-[277px]' >
                    <label className='text-xl'>
                        <span className='text-white'> Select {title} type: </span>
                        <div>
                            {/* 2 */}
                            <select name="" id="" value={selectedLoan} onChange={(e) => setSelectedLoan(e.target.value)} className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled>Ejemplo de Préstamo</option>
                                {loans.map(opc => (
                                    <option key={opc.id} value={opc.name}>{opc.name}</option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <label className='text-xl '>
                        <span className='text-white'>source account:</span>
                        <div>
                            {/* 1 */}
                            <select name="" id="" defaultValue="ejemploLoan" className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled>Ej: #ACCOUNT</option>
                                {
                                    clients.accounts?.map(opc2 => (
                                        <option key={opc2.id} value={opc2.id}>{opc2.number}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </label>

                    <label className='text-xl'>
                        <span className='text-white'> Amount: </span>
                        <div>
                            <input type="number" name="" id="" className='w-full p-2 rounded-md' placeholder='Entered Amount' />
                            {/* 3 */}
                            {/* <select name="" id="" defaultValue="ejemploLoan" className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled> maxamount</option>
                                {opciones.map(opc => (
                                    <option key={opc.id} value={opc.id}>{opc.maxAmount}</option>
                                ))}
                            </select> */}
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span className='text-white'> Payments: </span>
                        <div>
                            {/* 4 */}
                            <select name="" id="" defaultValue="ejemploLoan" className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled>Ej: payment: 24 </option>
                                {filteredLoans.map(opc => (
                                    opc.payments.map(payment => (
                                        <option key={payment} value={payment}>{` Payment: ${payment}`}</option>
                                    ))
                                ))}
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Apply" className='bg-green-500 w-full py-2 text-white text-xl cursor-pointer rounded-md' />
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

export default Apply