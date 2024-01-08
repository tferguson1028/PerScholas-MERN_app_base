import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) 
{
  const { links = [] } = props; 
  return (
    <nav>
      NavBar
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">New Order</Link>
    </nav>
  )
}

export default NavBar;
