import React, { useState } from 'react'
import TermsAndConditions from '../../public/termsAndConditions.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplyAccounts = () => {
    const [addAccount, setAddAccount] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate()


    const handLeAccounts = async (e) => {
        e.preventDefault();
        axios.post('/api/accounts/current/applyAccount', addAccount, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                console.log(res.data)
                navigate('/Accounts')
            })
            .catch(error => {
                console.log(error.response);
                if (error.response.status === 403) {
                    setErrorMessage(error.response.data)
                } else {
                    setErrorMessage(error.response.data)
                }
            })
    }

    return (
        <>
            <main className="flex flex-col items-center gap-5 px-10">

                <form onSubmit={handLeAccounts} className='py-5'>
                    <div className="flex flex-col items-center">
                        <img src={TermsAndConditions} className='w-32' alt="" />
                        <p>
                            Before proceeding with your account application, it is essential that you review and understand our terms and conditions. These terms are critical to ensuring a safe and satisfactory experience for all of our users. By agreeing to our terms and conditions, you agree to abide by all stated policies and to respect the rights and responsibilities of both you and our company.
                        </p>
                    </div>
                    <label>
                        <input type="checkbox" className='mt-4' required name="" id="" /> I have read and accept the terms and conditions
                    </label>
                    <p className='text-red-500 my-2'>{errorMessage}</p>
                    <input type="submit" value="Submit" className='bg-green-500 w-full p-2 text-white text-xl cursor-pointer rounded-md' />
                </form>

            </main>
        </>
    )
}

export default ApplyAccounts