import React from 'react'
import Lupa from '../../public/lupa.png'


const Header = ({name}) => {
    return (
        <>
            <header className=' flex justify-around items-center w-full py-8'>
                
                <div>
                    <h3 className='text-2xl'>
                        Welcome Back, {name}
                    </h3>
                </div>
                <div className='flex justify-center items-center gap-3 w-1/2'>
                    <img className='w-8 h-8' src={Lupa} alt="lupa" />
                    <label htmlFor="search">
                        <input type="text" name="buscador" id="search" placeholder='Search...'
                            className=' rounded-lg w-80 p-2 text-xl outline-none bg-transparent' />
                    </label>
                </div>
                <div className='flex gap-10'>
                    <div className='w-5 h-6 bg-red-500'>a</div>
                    <div className='w-5 h-6 bg-red-500'>b</div>
                    <div className='w-5 h-6 bg-red-500'>c</div>
                    <div className='w-10 h-10 border border-solid rounded-full bg-red-500'>d</div>
                </div>
            </header>
        </>
    )
}

export default Header