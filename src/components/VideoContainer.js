import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../constant'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'

function VideoContainer() {
    const [videos, setVideos] = useState([])
    const getAllVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const videoList = await data.json();
        setVideos(videoList.items)
    }
    useEffect(() => {
        getAllVideos()
    }, []);

    const rows = [];
    for (let i = 0; i < 50; i++) {
        rows.push(i);
    }
    // Early return
    if (videos.length === 0) return (
        <div className='flex flex-wrap'>
            {
                rows.map(e => {
                    return (
                        <Shimmer key={e} />
                    )
                })
            }
        </div>
    )
    return (
        <div className='flex flex-wrap'>
            {
                videos.map(video => {
                    return (
                        <VideoCard info={video} key={video.id} />
                    )
                })
            }
        </div >
    )
}

export default VideoContainer
