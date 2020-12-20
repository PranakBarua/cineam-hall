import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import ShowTicket from '../ShowTicket/ShowTicket';

const SeeTicket = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const [tickets,setTickets]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/myTickets',{
            method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email: loggedInUser.email })
        })
        .then(res=>res.json())
        .then(data=>setTickets(data[0]))
    },[])
    return (
        <div>
            <h1>Email : {loggedInUser.email}</h1>
            {
                tickets.map(ticket=><ShowTicket ticket={ticket}></ShowTicket>)
            }
        </div>
    );
};

export default SeeTicket;