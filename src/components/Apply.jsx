
import React, { useState } from 'react'

const Apply = ({ loans, clients, handLeInput, handLeLoans, errorMessage}) => {
    const [selectedLoan, setSelectedLoan] = useState();
    

    const handleLoanChange = (e) => {

        setSelectedLoan(e.target.value)

    };

    const pepe = loans.find(loan=> loan.id == selectedLoan)


    return (
        <>
            <h1 className='text-3xl font-thin text-center'>Apply for Loan</h1>
            <form onSubmit={handLeLoans} className='flex flex-col gap-5 py-5 w-11/12 m-auto rounded-xl'>
                    <label className='text-xl'>
                        <span>Select Loan type:</span>
                        <div>
                            {/* 2 */}
                            <select onInput={handLeInput} name='id' defaultValue="ejemploLoan" onChange={handleLoanChange} className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled>Loan Example</option>
                                {
                                    loans.map(loan => (<option key={loan.id} value={loan.id} >{loan.name}</option>))
                                }
                            </select>
                        </div>
                    </label>
                    <label className='text-xl '>
                        <span>Source account:</span>
                        <div>
                            {/* 1 */}
                            <select onChange={handLeInput} name='AccountDestination' defaultValue="ejemploLoan"  className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled>Select Account</option>
                                {
                                    clients.accounts?.map(account => (<option key={account.id} >{account.number}</option>))
                                }
                            </select>
                        </div>
                    </label>

                    <label className='text-xl'>
                        <span>Amount:</span>
                        <div>
                            {
                                selectedLoan != "" && <input type="number" className='w-full p-2 rounded-md' placeholder='Entered Amount' name='amount' max={pepe?.maxAmount} onChange={handLeInput} />
                            }
                        </div>
                    </label>
                    <label className='text-xl'>
                        <span>Payments:</span>
                        <div>
                            {/* 4 */}
                            <select onChange={handLeInput} name='payments' defaultValue="ejemploLoan" className='w-full p-2 rounded-md'>
                                <option value="ejemploLoan" disabled>Select payment </option>
                                {
                                    selectedLoan != "" && pepe?.payments.map(payment => <option key={payment} value={payment}>{` Payment: ${payment}`}</option>)
                                }
                            </select>
                        </div>
                    </label>
                    <p className='text-red-500'>{errorMessage}</p>
                    <input type="submit" value="Apply" className='bg-green-500 w-full py-2 text-white text-xl cursor-pointer rounded-md' />
            </form>
        </>
    )
}

export default Apply