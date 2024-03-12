    import React, { useEffect, useState } from 'react'
    import Apply from '../components/Apply'
    import Loan from '../../public/loanImg.jpeg'
    import axios from 'axios'
    import { useParams } from 'react-router-dom'

    const ApplyLoans = () => {

        const [loan, setLoan] = useState([]);
        const [client, setClient] = useState([]);
        const { id } = useParams();
        
        useEffect(() => {
            axios(`http://localhost:8080/api/loans/`)
                .then(response => {
                    setLoan(response.data);
                })
                .catch(error => console.log(error));
        }, []);

        useEffect(() => {
            axios(`http://localhost:8080/api/clients/${id}`)
                .then(response => {
                    setClient(response.data);
                })
                .catch(error => console.log(error));
        }, []);

        return (
            <main>
                <Apply loans={loan} clients={client} />
            </main>
        )
    }

    export default ApplyLoans