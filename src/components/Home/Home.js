import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
        <div className="d-flex justify-content-center align-items-center">
           <div className="text-center">
           <div className="login-area text-center">
               
               <Link to="/cinema"><button className="loginButton">Buy a Ticket</button></Link>
           </div> 
           </div>
       </div>
   </div>
    );
};

export default Home;