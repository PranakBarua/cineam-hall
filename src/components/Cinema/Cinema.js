import React, { useEffect, useState } from 'react';
import SingleCinema from '../SingleCinema/SingleCinema';

const Cinema = () => {
    const [cinemas,setCinemas]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cinemas')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCinemas(data)
        })
    },[])
    return (
        <div className="row">
            {
                cinemas.map(cinema=><SingleCinema cinema={cinema}></SingleCinema>)
            }
        </div>
    );
};

export default Cinema;