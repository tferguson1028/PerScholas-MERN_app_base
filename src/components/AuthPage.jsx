import React, {useState} from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function AuthPage() 
{
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>AuthPage</h1>
      <LoginForm setUser={setUser} />
      <SignUpForm />
    </div>
  )
}

export default AuthPage;
