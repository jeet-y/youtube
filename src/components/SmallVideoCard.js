import React from 'react'
import useIntToString from '../Hooks/useIntToString'

const SmallVideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, thumbnails, title } = snippet;
    let viewsVal = statistics.viewCount
    const views = useIntToString(viewsVal);
    return (
        <div className='mt-2 flex h-24'>
            <img src={thumbnails.medium.url} className="w-52 rounded-lg object-cover" alt="video" />
            <div className='text-white font-bold w-full ml-2'>
                <p className='overflow-clip overflow-ellipsis text-sm h-10'>{title}</p>
                <p className='font-normal text-sm text-gray-300'>{channelTitle}</p>
                <p className='font-normal text-sm text-gray-300'>{views} views  </p>
            </div>
        </div>
    )
}

export default SmallVideoCard
