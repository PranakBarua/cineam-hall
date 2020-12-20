import React from 'react';
import './TicketDate.css'
const TicketDate = (props) => {
    // const name=props.name
    // const date=props.date
    const {date}=props.ticket
    // console.log(name,date)
    // const handleTicket=(ticket)=>{
    //     console.log(name,date)
    //     const newTicket={
    //         name:name,
    //         date:date,
    //         ticket:ticket
    //     }
    //     fetch('http://localhost:5000/addTicket',{
    //         method:'POST',
    //         headers:{'content-type':'application/json'},
    //         body:JSON.stringify(newTicket)
    //     })
    //     .then(res=>res.json())
    //     .then(success=>{
    //         if(success){
    //             alert(`Thank's for Buying a ticket`)
    //         }
    //     })
    // }
    return (
        <div className="col-md-2 ticket-part d-flex justify-content-center align-items-center">
            <div className="">
                {date}
                <button className="btn btn-primary" onClick={()=>props.handleTicket(date)}>Buy Now</button>
            </div>
        </div>
           
    );
};

export default TicketDate;