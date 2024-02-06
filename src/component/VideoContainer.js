import React, { useEffect, useState } from 'react'
import { YT_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [ytAPI, setYTAPI] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(YT_API);
        const json = await data.json();
        setYTAPI(json.items);

    }


    if (ytAPI === null) return;




    return (
        <div className='flex flex-wrap'>
            {ytAPI.map((item) =>
                <Link key={item.id} to={"/watch?v=" + item.id}>
                    <VideoCard

                        thumbnails={item.snippet.thumbnails}
                        title={item.snippet.localized}
                        views={item.statistics}
                        channel={item.snippet}
                    />
                </Link>)}

        </div>
    )
}

export default VideoContainer
