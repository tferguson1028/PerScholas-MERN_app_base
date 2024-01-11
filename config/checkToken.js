const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) 
{
  // Check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token;
  
  if (token) 
  {
    token = token.replace('Bearer ', ''); // Remove the 'Bearer ' if it was included in the token header
    
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function(error, decoded) 
    {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      
      req.user = error ? null : decoded.user;  
      req.exp = error ? null : new Date(decoded.exp * 1000); // If your app cares... (optional)
      
      error ? console.log(error) : console.log("Token get success");
      
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next();
  }
};
