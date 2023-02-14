import React from 'react'
import FilterButtonList from './FilterButtonList'
import VideoContainer from './VideoContainer'

function MainContainer() {
    return (
        <div className='col-span-11 bg-[#0f0f0f] w-full p-3'>
            <div className='ml-8'>
                <FilterButtonList />
                <VideoContainer />
            </div>
        </div>
    )
}

export default MainContainer
