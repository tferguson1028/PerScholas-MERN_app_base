import React from 'react'
import { checkToken } from '../utilities/users-service';

function OrderHistoryPage() 
{

  async function handleCheckToken()
  {
    let expData = await checkToken();
  }

  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Login Expiration</button>        
    </div>
  )
}

export default OrderHistoryPage;
