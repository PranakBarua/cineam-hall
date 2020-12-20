import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Cinema from './components/Cinema/Cinema';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Ticket from './components/Ticket/Ticket';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SeeTicket from './components/SeeTicket/SeeTicket';
export const userContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    isSignedIn:false
  })
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/cinema">
            <Cinema></Cinema>
          </PrivateRoute>
          
          <Route path="/ticket/:cinemaName">
            <Ticket></Ticket>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route> 
          <Route path="/">
            <Home></Home>
          </Route>         
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
