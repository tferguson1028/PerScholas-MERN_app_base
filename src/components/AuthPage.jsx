import React, {useState} from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

import "../styles/AuthPageStyle.css";

function AuthPage(props) 
{
  const { setUser } = props;
  const [ authType, setAuthType ] = useState(0);
  
  function getAuth()
  {
    switch(authType)
    {
      case 0: return <LoginForm setUser={setUser} />;
      case 1: return <SignUpForm />;
    }
  }
  
  function changeAuth()
  {
    setAuthType(authType === 0 ? 1 : 0);
  }
  
  return (
    <>
      {/* <div className='logo'> */}
        <h1>MERN CAFE</h1>
      {/* </div> */}
      { getAuth() }
      {/* <div className='button'> */}
        <button onClick={changeAuth}>Change Auth</button>
      {/* </div> */}
    </>
  )
}

export default AuthPage;
