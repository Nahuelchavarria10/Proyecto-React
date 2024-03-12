import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
const MainLayout = (props) => {
    return (
        <div className='main-layout flex'>
            <SideBar />
            <div className='w-full'>
                <Header />
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout
