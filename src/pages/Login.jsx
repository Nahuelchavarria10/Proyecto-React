import React from 'react'

export const Login = () => {
    return (
        <section className='w-1/3 py-5 m-auto bg-[#181A1B] border-2 rounded-md border-neutral-400'>
            <h1 className='text-center'>Sign in</h1>
            <form action="" className='flex flex-col py-5 justify-center items-center gap-5'>
                <label htmlFor="name">Firts Name <br />
                    <input className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="text" name="firsName" id="name" placeholder='First name' />
                </label>
                <label htmlFor="lastname">Last Name <br />
                    <input className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="text" name="LastName" id="lastname" placeholder='Last Name'/>
                </label>
                <label htmlFor="email">Email <br />
                    <input className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="email" name="" id="email" placeholder='hello@example.com'/>
                </label>
                <label htmlFor="password">Password <br />
                    <input className='px-5 py-2 rounded-md border-2  border-blue-600 ease-out duration-300 hover:border-blue-950 hover:ease-in' type="password" name="" id="password" placeholder='Password'/>
                </label>
                <button className=' bg-[#009E23] px-[89px] py-2 rounded-md'>Sing in</button>
                <p className=''>Don't have an account? <a href=""><span className='text-blue-500'>Sign up</span></a></p>
            </form>
        </section>
    )
}
export default Login