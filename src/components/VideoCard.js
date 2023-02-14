import React from 'react'
// import useCalculateDate from '../Hooks/useCalculateDate'
import useIntToString from '../Hooks/useIntToString'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, thumbnails, title } = snippet;
    let viewsVal = statistics.viewCount
    const views = useIntToString(viewsVal);
    // const uploadedFor = useCalculateDate(snippet.publishedAt, today)
    // console.log(`uploadedFor   ${uploadedFor}`)

    return (
        <div className='w-1/5 p-2 mt-6 cursor-pointer' >
            <img src={thumbnails.medium.url} className="w-full rounded-xl object-cover" alt="video" />
            <div className='flex mt-4'>
                <img className='w-9 h-9 object-cover rounded-full' src={thumbnails.medium.url} alt='video icon' />
                <div className=' text-white font-bold ml-2'>
                    <p>{title}</p>
                    <p className='font-normal text-sm text-gray-300'>{channelTitle}</p>
                    <p className='font-normal text-sm text-gray-300'>{views} views  </p>
                </div>
            </div>
        </div >
    )
}

export default VideoCard

    // . & #x2022;