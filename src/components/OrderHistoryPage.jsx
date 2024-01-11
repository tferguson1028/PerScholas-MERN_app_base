import React from 'react'
import { checkToken } from '../utilities/users-service';

function OrderHistoryPage() 
{

  async function handleCheckToken()
  {
    let authExp = await checkToken();
    console.log(authExp);
    alert(authExp);
  }

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Login Expiration</button>        
    </div>
  )
}

export default OrderHistoryPage;
