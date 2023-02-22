import React from 'react'
import Head from './Head'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div>
            <Head />
            <div className='flex bg-[#0f0f0f]'>
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Body


// #212121
// #0f0f0f