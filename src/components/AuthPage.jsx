import React, {useState} from 'react'
import SignUpForm from './SignUpForm';

function AuthPage() 
{
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>AuthPage</h1>
      <SignUpForm />
    </div>
  )
}

export default AuthPage;
