import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function useAxios(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    /* const [envio, setEnvio] = useState() */

    useEffect(() => {
        setLoading(true);
        axios(url)
            .then(response => setData(response.data))
            .catch(error => setError(error))
            .finally(()=> setLoading(false));
    }, [])
    console.log(data, loading, error);

    return {data,loading,error};
}