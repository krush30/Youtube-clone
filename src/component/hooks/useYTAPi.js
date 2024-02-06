import React, { useEffect, useState } from 'react'
import { YT_API } from '../../utils/constant';

const useYTAPi = () => {
    const [ytAPI, setYTAPI] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(YT_API);
        const json = await data.json();
        setYTAPI(json.items);

    }
    return ytAPI;


}

export default useYTAPi
