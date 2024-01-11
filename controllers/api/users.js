const User = require("../../models/user.js")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

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
    res.status(400).json(exception);
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

async function login(req, res, next)
{
  try
  {
    // Get user from db
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    // console.log(req.body);
    
    let match = await bcrypt.compare(req.body.password, user.password);

    if(!match) 
    { 
      console.log("HI");
      throw new Error("Passwords do not match."); 
    }
    
    res.json(createJWT(user));
    next();
  }catch(exception)
  {
    console.log(exception);
    res.status(400).json(exception);
  }
}


module.exports = { create, login };


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
