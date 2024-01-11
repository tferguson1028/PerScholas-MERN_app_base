// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData) { return sendRequest(`${BASE_URL}`, "POST", userData); }
export async function logIn(credentials) { return sendRequest(`${BASE_URL}/login`, "POST", credentials); }
export async function checkToken() { return sendRequest(`${BASE_URL}/check-token`); }

export async function sendRequest(url, method = "GET", payload = null) 
{
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const options = { method };
  if(payload)
  {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  
  const res = await fetch(url, options);

  // res.json() will resolve to the JWT
  if (res.ok) { return res.json(); } 
  else { throw new Error('Invalid Sign Up'); }
}
