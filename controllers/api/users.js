const User = require("../../models/user.js")
const jwt = require("jsonwebtoken");

async function create(req, res)
{
  try
  {
    // Add user to db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  }catch(exception)
  {
    res.status(400).json(exception)
  }
}

function createJWT(user) 
{
  // Returns String
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = { create };


// function create(req, res)
// {
//   res.json(
//   {
//     user: 
//     {
//       name: req.body.name,
//       email: req.body.email
//     }
//   });
// }
