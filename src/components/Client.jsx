import React from 'react'
import User from '../../public/user.png'
const Client = ({name, lastName, email}) => {
    return (
        <div className='mt-10'>
            <article className=' flex flex-col gap-5 w-[477px] h-[277px] p-5 my-10 bg-gray-100 rounded-md border  border-neutral-400'>
            <h2 className='text-center'><span className='text-lg font-bold'>{name}</span></h2>
            <div className=' flex items-center gap-3'>
                <img src={User} alt="usuario" className='w-14 h-14' />
                <section className=''>
                    <h3 className=''>Name: {name}</h3>
                    <h3>Last Name: {lastName}</h3>
                    <h3>Email: {email}</h3>
                </section>
            </div>
        </article>
        </div>
    )
}

export default Client