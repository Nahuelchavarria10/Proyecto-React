import React from 'react'
import Card from '../components/Card'
import { useAxios } from '../useAxios'
import { Link } from 'react-router-dom'

const Cards = () => {
    const { data, loading, error } = useAxios("http://localhost:8080/api/clients/1")

    return (
        <main className='flex justify-center flex-wrap gap-10 px-10'>
            {error && <h1>Error: {error}</h1>}
            {loading && <li>Loading</li>}
            {
                data.cards?.map(card => <Card key={card.id} card={card}/>)
            }
            <article className='flex flex-col justify-center items-center w-[477px] h-[277px] bg-gray-600 text-white p-5 mb-5 rounded-md border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <Link to={`/ApplyCard`} className=' text-xl px-10 py-5 border rounded-xl'>Apply Card</Link>
            </article>
        </main>
    )
}

export default Cards