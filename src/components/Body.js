import React from 'react'
import Head from './Head'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div>
            <Head />
            <div className='flex bg-[#212121]'>
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body
