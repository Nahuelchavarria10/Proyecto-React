import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {

    return (

        <div className='flex min-w-full min-h-screen bg-apply'>
            <div className='min-w-[60px]'>
                <SideBar />
            </div>
            <div className='flex items-center flex-col min-h-screen'>
                <Header />
                <Outlet />
            </div>
        </div>

    )
}

export default MainLayout
