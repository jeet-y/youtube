import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../constant'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
// import { Link } from 'react-router-dom'
import SmallVideoCard from './SmallVideoCard'
import { useSearchParams } from 'react-router-dom'

const WatchContainer = () => {
    const [param] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    })
    const [videos, setVideos] = useState([])

    const getAllVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const videoList = await data.json();
        setVideos(videoList.items)
    }
    useEffect(() => {
        getAllVideos()
    }, []);

    return (
        <div className='w-full min-h-full'>
            <div className='grid grid-flow-col gap-x-6 justify-center m-3'>
                <div className='cols-span-8'>
                    <iframe width="1200" height="600" src={'https://www.youtube.com/embed/' + param.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <div></div>
                </div>
                <div className='cols-span-2 w-96'>
                    {
                        videos.map(video => {
                            return (
                                <div div className='cursor-pointer' key={video.id} >
                                    {/* <Link to={'/watch?v=' + param} target="_blank" > */}
                                    <SmallVideoCard info={video} />
                                    {/* </Link> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default WatchContainer
