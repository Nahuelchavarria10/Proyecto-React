    import React, { useEffect, useState } from 'react'
    import Apply from './Apply'
    import Loan from '../../public/loanImg.jpeg'
    import axios from 'axios'
    import { useParams } from 'react-router-dom'

    const ApplyLoan = () => {

        const [loan, setLoan] = useState([]);
        const [client, setClient] = useState([]);
        const { id } = useParams();

        
        useEffect(() => {
            axios(`http://localhost:8080/api/loans/`)
                .then(response => {
                    setLoan(response.data);
                    console.log(loan);
                })
                .catch(error => console.log(error));
        }, []);

        useEffect(() => {
            axios(`http://localhost:8080/api/clients/${id}`)
                .then(response => {
                    setClient(response.data);
                    console.log(client);
                })
                .catch(error => console.log(error));
        }, []);

        const title = "loan";

        return (
            <main>
                <Apply title={title} img={Loan} loans={loan} clients={client} />
            </main>
        )
    }

    export default ApplyLoan