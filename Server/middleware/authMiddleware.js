const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const requireAuth = (req,res) => {
  const token = req.cookies.token;
  if(!token) return res.json({valid:false});
   
  jwt.verify(token,secretKey,(err,decoded)=>{
    if(err) return res.json({valid:false});
    if(decoded){
      return res.json({valid:true});
      req.user = decoded.id;
    }
  })
}

module.exports = requireAuth;
