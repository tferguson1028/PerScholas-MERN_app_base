import React, { Component } from 'react';
import { signUp } from '../utilities/users-service';

export class LoginForm extends Component 
{
  state = { email: "", password: "", error: "" };
  
  handleSubmit = async (event) =>
  {
    event.preventDefault();
    try 
    {
      const formData = {...this.state};
      console.log("Form Data: ", formData);

      // Removing unused data form the object we're submitting
      delete formData.error;
      delete formData.confirm;

      alert(JSON.stringify(this.state));
      
      console.log(user);
      
    } catch(exception)
    {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }
  
  // You have to use an arrow function for this.setState to work. This is stupid.
  // You can also bind manually, but I don't know how to do that.
  handleChange = (event) =>
  {
    // Doing this allows us to access an object param if the names are the same.
    this.setState({[event.target.name]: event.target.value, error: "" });
  }
  
  render() 
  {
    const disable = this.state.password.length > 0 && this.state.email.length > 0;
    
    return (
      <div>
        <h1>SignUpForm</h1>
        <div className='form-container'>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
}

export default LoginForm;

