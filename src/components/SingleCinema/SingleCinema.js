import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCinema.css'
const SingleCinema = (props) => {
    const {name}=props.cinema
    return (
        <div className="col-md-3 cinema-part d-flex justify-content-center align-items-center">
            <div className="">
                <Link to={`ticket/${name}`}>{name}</Link>
            </div>
        </div>
    );
};

export default SingleCinema;