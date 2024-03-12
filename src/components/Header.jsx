import React, { useEffect, useState } from 'react'
import Lupa from '../../public/lupa.png'
import { data } from 'autoprefixer';
import axios from 'axios';

import User from '../../public/user.png'
import Notification from '../../public/notification.png'
import Message from '../../public/message.png'
import Night from '../../public/night.png'


const Header = ({ name }) => {
    const [client, setClient] = useState([]);

    useEffect(() => {
        axios(`http://localhost:8080/api/clients/1`)
            .then(response => {
                setClient(response.data);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(client);

    return (
        <>
            <header className=' flex justify-around items-center w-full py-8'>

                <div>
                    <h3 className='text-2xl'>
                        Welcome Back, {client.firstName} {client.lastName}
                    </h3>
                </div>
                <div className='flex justify-center items-center gap-3 w-1/2'>
                    <img className='w-8 h-8' src={Lupa} alt="lupa" />
                    <label htmlFor="search">
                        <input type="text" name="buscador" id="search" placeholder='Search...'
                            className=' rounded-lg w-80 p-2 text-xl outline-none bg-transparent' />
                    </label>
                </div>
                <div className='flex justify-center relative items-center gap-10'>
                    <div className='w-[29px]'>
                        <img src={Night} alt="" />
                    </div>
                    <div className='w-[31px]'>
                        <img src={Message} alt="" />
                    </div>
                    <div className='w-[39px]'>
                        <img src={Notification} alt="" />
                    </div>
                    <div className='w-[50px] border border-solid rounded-full'>
                        <img src={User} alt="" />
                        {/* <div className='bg-SideBard rounded-xl absolute right-1 top-16 z-10 w-40 h-52 '>

                        </div> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header