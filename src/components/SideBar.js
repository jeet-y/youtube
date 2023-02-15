import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function SideBar() {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    //Early return
    if (!isMenuOpen) return null;

    return (
        <div className='w-60 bg-[#0f0f0f]'>
            <div className='text-white'>
                <ul className='pl-6 text-sm'>
                    <Link to='/'>
                        <li className='pt-3 flex items-center'>
                            <span className="material-symbols-sharp">
                                home
                            </span>
                            <p className='inline-block pl-5'>Home</p>
                        </li>
                    </Link>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            smart_display
                        </span>
                        <p className='inline-block pl-5'>Shorts</p>
                    </li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            subscriptions
                        </span>
                        <p className='inline-block pl-5'>Subscriptions</p>
                    </li>
                </ul>
                <hr className='my-4 opacity-30'></hr>
                <ul className='pl-6 text-sm'>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            video_library
                        </span>
                        <p className='inline-block pl-5'>Library</p>
                    </li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            history
                        </span>
                        <p className='inline-block pl-5'>History</p>
                    </li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            slideshow
                        </span>
                        <p className='inline-block pl-5'>Your videos</p>

                    </li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            schedule
                        </span>
                        <p className='inline-block pl-5'>Watch later</p>

                    </li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            thumb_up
                        </span>
                        <p className='inline-block pl-5'>Liked Videos</p></li>
                </ul>
                <hr className='my-4 opacity-30'></hr>
                <h2 className='pl-3 font-bold'>Subscriptions</h2>
                <ul className='pl-6 text-sm'>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Cafe De Anatolia</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Kevin Powell</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Codevolution</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Luke Hurd</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>techsith</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Telusko</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Java Brains</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Akshay Saini</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            person_filled
                        </span>
                        <p className='inline-block pl-5'>Udart</p></li>
                </ul>
                <hr className='my-4 opacity-30'></hr>
                <h2 className='pl-3 font-bold'>Exolore</h2>
                <ul className='pl-6 text-sm mb-10'>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            trending_up
                        </span>
                        <p className='inline-block pl-5'>Trending</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            library_music
                        </span>
                        <p className='inline-block pl-5'>Music</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            movie
                        </span>
                        <p className='inline-block pl-5'>Movies</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            live_tv
                        </span>
                        <p className='inline-block pl-5'>Live</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            sports_esports
                        </span>
                        <p className='inline-block pl-5'>Gaming</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            newspaper
                        </span>
                        <p className='inline-block pl-5'>News</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            sports_cricket
                        </span>
                        <p className='inline-block pl-5'>Sports</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            local_library
                        </span>
                        <p className='inline-block pl-5'>Learning</p></li>
                    <li className='pt-3 flex items-center'>
                        <span className="material-symbols-sharp">
                            diamond
                        </span>
                        <p className='inline-block pl-5'>Fashion & Beauty</p></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
