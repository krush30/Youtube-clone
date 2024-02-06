import React from 'react'
import Button from './Button';

const ButtonList = () => {
    const list = ["All", "Gaming", "Game shows", "Music", "React routers", "Mixes", "News"]
    return (
        <div className='flex'>
            {list.map((item) => (<Button key={item} name={item} />))}

        </div>
    )
}

export default ButtonList;
