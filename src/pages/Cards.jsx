import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useAxios } from '../useAxios'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cards = () => {
    const [card, setCards] = useState({});

    useEffect(() => {
        axios(`http://localhost:8080/api/clients/1`)
            .then(response => {
                setCards(response.data);
                console.log("pepe");
            })
            .catch(error => console.log(error));
    }, []);
    console.log(card);

    return (
        <main className='flex justify-center flex-col gap-10 px-10'>

            <div className='flex flex-wrap justify-around'>
            {
                card.cards?.map(card => <Card key={card.id} card={card}/>)
            }
            </div>
            <article className='bg-apply self-center w-full text-center text-black p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <Link to={`/ApplyCards/`} className=' text-xl px-10 py-5 border rounded-xl'>Apply Card</Link>
            </article>
        </main>
    )
}

export default Cards