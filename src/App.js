import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

// Components
import AuthPage from './components/AuthPage';
import NewOrderPage from './components/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import NavBar from './components/NavBar';

function App() 
{
  const [ user, setUser ] = useState(null);
  return (
    <div className="App">
      { 
        user ?
        <>
          <NavBar />
          <Routes>
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
