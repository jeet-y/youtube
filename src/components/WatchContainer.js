import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../constant'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import SmallVideoCard from './SmallVideoCard'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'

const WatchContainer = () => {
    const currentVideo = useSelector(store => store.app.currentVideo);
    const { title, channelTitle, thumbnails } = currentVideo[0]?.snippet;

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
        <div className='w-full flex justify-center mt-5'>
            <div className='w-2/3'>
                <div className='flex justify-center min-h-min'>
                    <iframe width="100%" height="700" src={'https://www.youtube.com/embed/' + param.get('v')} title="YouTube video player" allowFullScreen></iframe>
                </div>
                <div className='mt-3 text-white font-bold text-lg'>
                    {title}
                </div>
                <div className='flex text-white mt-2'>
                    <img className='w-9 h-9 object-cover rounded-full' src={thumbnails.medium.url} alt='video icon' />
                    <div className='ml-3 font-bold text-md'>
                        {channelTitle}
                    </div>
                </div>
                <div className='mt-4'>
                    <input className='border-[#3b3b3b] border-0 border-b-[1px] h-10 w-full bg-[#0f0f0f] outline-none text-white text-sm p-1 focus:border-[#a3a2a2] focus:border-b-[2px]' placeholder='Add a comment...' />
                    <div className='flex justify-end'>
                        <button className='rounded-3xl px-4 py-2 mt-2 text-white font-medium hover:bg-[#282828] mr-2'>Cancel</button>
                        <button className='rounded-3xl bg-[#282828] px-4 py-2 mt-2 text-[#838383] font-medium hover:bg-white hover:text-black '>Comment</button>
                    </div>
                </div>
                <div className='mt-8 font-medium text-white w-full'>
                    Comments
                    <Comments />
                </div>
            </div>
            <div className='w-96 ml-4'>
                {
                    videos.map(video => {
                        return (
                            <div className='cursor-pointer' key={video.id} >
                                <SmallVideoCard info={video} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WatchContainer
