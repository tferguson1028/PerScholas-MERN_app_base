import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

// Components
import AuthPage from './components/AuthPage';
import NewOrderPage from './components/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import NavBar from './components/NavBar';

import { getUser } from "./utilities/users-service";

function App() 
{
  const [ user, setUser ] = useState(getUser());
  return (
    <div className="App">
      { 
        user ?
        <>
          <NavBar user={ user } setUser={ setUser } />
          <Routes>
            <Route index element={<OrderHistoryPage />} />
            <Route path={`/orders`} element={<OrderHistoryPage />} />
            <Route path={`/orders/new`} element={<NewOrderPage />} />
          </Routes> 
        </> :
        <AuthPage /> 
      }
    </div>
  );
}

export default App;
