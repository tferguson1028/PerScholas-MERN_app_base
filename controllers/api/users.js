const User = require("../../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

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

async function create(req, res)
{
  try
  {
    // Add user to db
    const user = await User.create(req.body);
    const token = createJWT(user);
    respond(res, token);
  }catch(exception)
  {
    res.status(400).json(exception);
  }
}

async function login(req, res, next)
{
  try
  {
    // Get user from db
    const user = await User.findOne({ email: req.body.email });
    let match = await bcrypt.compare(req.body.password, user.password);

    if(!match) 
    { 
      console.log("HI");
      throw new Error("Passwords do not match."); 
    }
    
    respond(res, createJWT(user), next);
  }catch(exception)
  {
    console.log(exception);
    res.status(400).json(exception);
  }
}

async function checkToken(req, res)
{
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

function respond(res, json, next = () => {})
{
  try
  {
    res.json(json);
    next();
  }catch(exception)
  {
    console.log(exception);
    res.status(400).json(exception);
  }
}


module.exports = { create, login, checkToken };
