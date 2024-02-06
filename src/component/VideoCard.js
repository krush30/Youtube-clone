import React from 'react'

const VideoCard = ({ thumbnails, title, views, channel }) => {

    return (
        <div className='p-2 m-2 w-96 h-auto'>
            <img className='rounded-lg hover:rounded-none' src={thumbnails.medium.url} alt='thumbnails' />
            <h1 className='font-bold py-2'>{title.title}</h1>
            <div className='flex'>
                <h1 className='pr-2'>{channel.channelTitle}  </h1>
                <h1>{views.viewCount / 10000}k views</h1></div>

        </div>
    )
}

export default VideoCard;
