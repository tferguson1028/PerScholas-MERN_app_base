import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Components
import AuthPage from './components/AuthPage';
import NewOrderPage from './components/NewOrderPage';
import OrderHistoryPage from './components/OrderHistoryPage';

function App() 
{
  const [ user, setUser ] = useState(null);
  return (
    <div className="App">
      { user ? <NewOrderPage /> : <AuthPage /> }
    </div>
  );
}

export default App;
