import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showSidebarMan } from '../utils/show';
import { SEARCH_APi, YT_API } from '../utils/constant';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchYoutubeApi();
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery])

    const fetchYoutubeApi = async () => {
        const data = await fetch(SEARCH_APi + searchQuery);
        const json = await data.json();
        // console.log(json);
    }


    const dispatch = useDispatch();


    const handleSideBar = () => {
        dispatch(showSidebarMan())
    }
    return (
        <div className='h-14 p-4 grid grid-flow-col shadow-lg'>
            <div className='flex col-span-1 cursor-pointer' onClick={() => handleSideBar()} >
                <img className='h-8 ' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' alt='menu' />
                <img className='h-10 ' src='https://www.gstatic.com/youtube/img/promos/growth/e6cb4b33d9b818dc663e0774bf2e4f8c4366978032a880a4bc88eeaa79f4eb8c_244x112.webp' alt='yt-Logo' />
            </div>


            <form className='col-span-9 text-center ' onSubmit={(e) => e.preventDefault()}>
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-1/2 h-10 rounded-l-full  bg-gray-700 '
                    type='text'
                    placeholder='' />
                <button className='h-10  rounded-r-full border border-gray-600 px-'>Search</button>
            </form>
            <img className='h-10 col-span-1 rounded-full' alt='user-icon' src='https://media.istockphoto.com/id/1434414228/photo/stern-sad-cat-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=wis7NGP0_4_Vwti3xioilh3NfYrwHO-JoRMvFVzr6Ck=' />
        </div>
    )
}

export default Head;
