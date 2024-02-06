import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeshowSidebar } from '../utils/show';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeshowSidebar());
    }, [])


    return (
        <div className='p-5 '>
            <iframe width="1100" height="600"
                src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=n8BQp5M2_cLOYp-H"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage;
