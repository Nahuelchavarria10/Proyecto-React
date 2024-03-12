
    import React, { useState } from 'react'
    import Loan from '../../public/loanImg.jpeg'

    const Apply = ({ loans, clients }) => {
        const [selectedLoan, setSelectedLoan] = useState();
        const [maxAmount, setMaxAmount] = useState(0);
        const [payment, setPayment] = useState();

        const filteredLoans = loans.filter(loan => loan.name === selectedLoan);
            console.log(selectedLoan);
            console.log(filteredLoans);
        
        const handleLoanChange = (e) => {

            const selectedLoanName = e.target.value;
            setSelectedLoan(selectedLoanName);

            const foundLoan = loans.find(loan => loan.name === selectedLoanName);
            setMaxAmount(foundLoan ? foundLoan.maxAmount : 0);

        };
        
        return (
            <>
                <h1 className='font-medium py-4 text-4xl text-center'>Apply for Loan</h1>
                <form action="" className='flex justify-evenly items-center py-10 gap-5 bg-apply w-11/12 m-auto rounded-3xl'>
                    <div className=' flex flex-col justify-around gap-2 w-1/5 h-[277px]' >
                        <label className='text-xl'>
                            <span className=''> Select Loan type: </span>
                            <div>
                                {/* 2 */}
                                <select name="" id="" defaultValue="ejemploLoan" onChange={handleLoanChange} className='w-full p-2 rounded-md'>
                                    <option value="ejemploLoan" disabled>Ejemplo de Préstamo</option>
                                    {
                                    loans.map(loan => (<option key={loan.id} >{loan.name}</option>))
                                    }
                                </select>
                            </div>
                        </label>
                        <label className='text-xl '>
                            <span className=''>source account:</span>
                            <div>
                                {/* 1 */}
                                <select name="" id="" defaultValue="ejemploLoan" className='w-full p-2 rounded-md'>
                                    <option value="ejemploLoan" disabled>Select Account</option>
                                    {
                                        clients.accounts?.map(account => (<option key={account.id} >{account.number}</option>))
                                    }
                                </select>
                            </div>
                        </label>

                        <label className='text-xl'>
                            <span className=''> Amount: </span>
                            <div>
                                <input type="number" name="" id="" className='w-full p-2 rounded-md' placeholder='Entered Amount' max={maxAmount}/>
                            </div>
                        </label>
                        <label className='text-xl'>
                            <span className=''> Payments: </span>
                            <div>
                                {/* 4 */}
                                <select name="" id="" defaultValue="ejemploLoan" className='w-full p-2 rounded-md'>
                                    <option value="ejemploLoan" disabled>Select payment </option>
                                    {
                                    filteredLoans.map(loan => (
                                        loan.payments.map(payment => <option key={payment} value={payment}>{` Payment: ${payment}`}</option>)))
                                    }
                                </select>
                            </div>
                        </label>
                        <input type="submit" value="Apply" className='bg-green-500 w-full py-2 text-white text-xl cursor-pointer rounded-md' />
                    </div>
                </form>
            </>
        )
    }

    export default Apply