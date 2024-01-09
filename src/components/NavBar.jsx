import React from 'react';
import { Link } from 'react-router-dom';

import * as userService from "../utilities/users-service";

import "../styles/NavBarStyle.css";

function NavBar(props) 
{
  const { links = [], user, setUser } = props; 
 
  function handleLogOut() 
  {
    // Delegate to the users-service
    userService.logOut();
    
    // Update state will also cause a re-render
    setUser(null);
  }
  
  return (
    <nav>
      <h2>{"Welcome, " + user.name}</h2>
      <div className='Links'>
        <Link to="/orders">Order History</Link>
        <Link to="/orders/new">New Order</Link>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  )
}

export default NavBar;
