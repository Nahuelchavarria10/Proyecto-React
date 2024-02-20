import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function useAxiosPost(url) {
    const [error2, setError2] = useState(null);
    const [objeto, setObjeto] = useState({});
    useEffect(() => {
        axios.post(url)
            .then(response => setData(response.data))
            .catch(error2 => setError2(error2))
    }, [])
    console.log(error2);

    return {error2};
}