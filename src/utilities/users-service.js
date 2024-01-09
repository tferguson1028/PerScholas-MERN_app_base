// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api';

export async function signUp(userData)
{
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  
  localStorage.setItem("token", token);
  return token;
}

export function getToken()
{
  const token = localStorage.getItem("token");
  
  if(!token) return null;
  
  const payload = JSON.parse(atob(token.split(".")[1]));
  if(payload.exp < Date.now() / 1000) // Expired token
  {
    localStorage.removeItem("token");
    return null;
  }
  
  return token;
}

export function getUser()
{
  const token = getToken();
  
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

