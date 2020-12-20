import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TicketDate from '../TicketDate/TicketDate';
import './Ticket.css'
import { userContext } from '../../App';
const Ticket = () => {
    const {cinemaName}=useParams();
    console.log(cinemaName)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const tickets=[
      {date:1},{date:2},{date:3},{date:4},{date:5},{date:6},{date:7},{date:8},{date:9},{date:10},{date:11},{date:12},
      {date:13},{date:14},{date:15},{date:16},{date:17},{date:18},{date:19},{date:20},{date:21},{date:22},{date:23},{date:24},
      {date:25},{date:26},{date:27},{date:27},{date:29},{date:30},{date:31},{date:32},{date:33},{date:34},{date:35},{date:36},
      {date:37},{date:38},{date:39},{date:40}
  ]


  const handleTicket=(ticket)=>{
    var dateObj = selectedDate
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    var shortDate = year + '/' + month + '/' + date;
    const newTicket={
        name:cinemaName,
        date:shortDate,
        ticket:ticket,
        email:loggedInUser.email
    }
    fetch('http://localhost:5000/addTicket',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(newTicket)
    })
    .then(res=>res.json())
    .then(success=>{
        if(success){
            alert(`Thank's for Buying a ticket`)
            console.log(success)
        }
        else{
            alert(`this ticket is booked or you can buy only ten tickets`)
        }
        
    })
    .catch(error=>{
        alert(`this ticket is booked or you can buy only ten tickets`)
    })
}



    return (
        
        <div>
            <h1 className="text-center text-color">Select a date and take a Single ticket</h1>
            {/* <Link to="/myTickets"><h4 className="text-color-another">See your all ticket</h4></Link> */}
            <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
        </div>
            <div className="row">
                {
                    tickets.map(ticket=><TicketDate ticket={ticket} handleTicket={handleTicket}></TicketDate>)
                }
            </div>
        </div>
    );
};

export default Ticket;