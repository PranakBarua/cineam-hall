import React from 'react';

const ShowTicket = (props) => {
    const{name,date,ticket,email}=props.ticket
    return (
        <div>
            <h2>Cinema Name:{name}--Ticket:{ticket}--date:{date}</h2>
        </div>
    );
};

export default ShowTicket;