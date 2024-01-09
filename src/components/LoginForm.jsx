import React, { useState } from 'react';
import * as usersService from '../utilities/users-service';

function LoginForm(props) 
{
  const { setUser } = props;
  const [credentials, setCredentials] = useState({ email: "", password: ""});
  const [error, setError] = useState("");

  async function handleSubmit(event) 
  {
    event.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.logIn(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }
  
  function handleChange(event) 
  {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setError('');
  }
  
  return (
    <div>
      <h1>Log In</h1>
      <div className='form-container'>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit" disabled={false}>Log In</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

export default LoginForm;
