import React from 'react'
import { useSelector } from 'react-redux'

function SideBar() {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Early return
    if (!isMenuOpen) return null;

    return (
        <div className='w-44 bg-[#0f0f0f]'>
            <div className='text-white'>
                <ul className='pl-6 text-sm'>
                    <li className='pt-3'>Home</li>
                    <li className='pt-3'>Shorts</li>
                    <li className='pt-3'>Subscriptions</li>
                </ul>
                <hr className='my-4 opacity-30'></hr>
                <ul className='pl-6 text-sm'>
                    <li className='pt-3'>Library</li>
                    <li className='pt-3'>History</li>
                    <li className='pt-3'>Your videos</li>
                    <li className='pt-3'>Watch later</li>
                    <li className='pt-3'>Liked Videos</li>
                </ul>
                <hr className='my-4 opacity-30'></hr>
                <p className='pl-3 font-bold'>Subscriptions</p>
                <ul className='pl-6 text-sm'>
                    <li className='pt-3'>Cafe De Anatolia</li>
                    <li className='pt-3'>Kevin Powell</li>
                    <li className='pt-3'>Codevolution</li>
                    <li className='pt-3'>Luke Hurd</li>
                    <li className='pt-3'>techsith</li>
                    <li className='pt-3'>Telusko</li>
                    <li className='pt-3'>Java Brains</li>
                    <li className='pt-3'>Akshay Saini</li>
                    <li className='pt-3'>Udart</li>
                </ul>
                <hr className='my-4 opacity-30'></hr>
                <p className='pl-3 font-bold'>Exolore</p>
                <ul className='pl-6 text-sm mb-10'>
                    <li className='pt-3'>Trending</li>
                    <li className='pt-3'>Music</li>
                    <li className='pt-3'>Movies</li>
                    <li className='pt-3'>Live</li>
                    <li className='pt-3'>Gaming</li>
                    <li className='pt-3'>News</li>
                    <li className='pt-3'>Sports</li>
                    <li className='pt-3'>Learning</li>
                    <li className='pt-3'>Fashion & Beauty</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
