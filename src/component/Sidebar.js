import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const show = useSelector(store => store.show.showSidebar);
    console.log(show);
    if (show === null) return;
    return (
        (show && <div className='p-5 shadow-lg w-48' >
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li>Shorts</li>
                <li>Videos</li>
            </ul>
            <h1 className='font-bold'>Subscription</h1>
            <ul>

                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold'>Watch later</h1>
            <ul>

                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>)
    )
}

export default Sidebar;
