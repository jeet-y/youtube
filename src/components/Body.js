import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './SideBar'

function Body() {
    return (
        <div className='flex overflow-y-hidden'>
            <SideBar />
            <MainContainer />
        </div>
    )
}

export default Body
