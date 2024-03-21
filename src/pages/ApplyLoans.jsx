import React, { useEffect, useState } from 'react'
import Apply from '../components/Apply'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../redux/actions/auth.actions'
import { useNavigate } from 'react-router-dom'


const ApplyLoans = () => {
    const [loan, setLoan] = useState([]);
    const [addLoan, setAddLoan] = useState({ id: '', AccountDestination: '', amount: '', payments: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const user = useSelector((store) => store.authReducer.user);
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { current } = authActions;

    //GET loans/
    useEffect(() => {
        if (!user.loggedIn && !!token) {
            axios.get("/api/loans/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
                .then(res => {
                    console.log(res.data);
                    setLoan(res.data);
                })
        }
    }, [])

    //GET Clients/$id
    useEffect(() => {
        if (!user.loggedIn && !!token) {
            axios.get(`/api/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    console.log(res.data);
                    dispatch(current(res.data))
                })
        }
    }, [])

    //POST loans/
    const handleLoans = async (e) => {
        e.preventDefault();
        axios.post('/api/loans/', addLoan, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                console.log(res.data)
                navigate('/Loans')
            })
            .catch(error=>{
                console.log(error.response);
                if (error.response.status === 403) {
                    setErrorMessage(error.response.data)
                }else{
                    setErrorMessage(error.response.data)
                }
            })
    }

    const handLeInput = (e) => {
        setAddLoan({ ...addLoan, [e.target.name]: e.target.value })
    }
    console.log(addLoan);

    return (
        <main className='w-[80%]'>
            <Apply loans={loan} clients={user} handLeInput={handLeInput} handLeLoans={handleLoans} errorMessage={errorMessage} />
        </main>
    )
}

export default ApplyLoans