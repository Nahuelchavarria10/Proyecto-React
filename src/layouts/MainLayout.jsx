import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {

    return (

        <div className='flex m-auto w-full justify-end bg-apply'>
            <div className='min-w-[15%] md:min-w-[10%] lg:min-w-[8%] 2xl:min-w-[4.5%]'>
                <SideBar />
            </div>
            <div className='flex items-center gap-3 w-full flex-col min-h-screen'>
                <Header />
                <Outlet />
            </div>
        </div>

    )
}

export default MainLayout
