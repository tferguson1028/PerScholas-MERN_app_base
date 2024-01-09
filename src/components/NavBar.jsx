import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) 
{
  const { links = [], user } = props; 
  return (
    <nav>
      <h2>{"Welcome, " + user.name}</h2>
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">New Order</Link>
    </nav>
  )
}

export default NavBar;
