const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const maxAge = 60*60*24

const createToken = (id) =>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:maxAge});
}


module.exports.sign_up_post = async(req,res)=>{
    try{
        const{name,email,password} = req.body
        const user = await User.create({name,email,password});
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge:maxAge*1000,sameSite:'none',secure:false,httpOnly:true})
        res.status(200).json(user);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

module.exports.log_in_post = async(req,res)=>{
    const {email,password} = req.body;
   
   try{
     const user = await User.login(email,password);
     const token = createToken(user._id);
     res.cookie('jwt',token,{maxAge:maxAge*1000,sameSite:'none',secure:false,httpOnly:true})
     res.status(200).json(user);
   }
   catch(e){
    res.status(400).json({error:e.message});
   }
}

module.exports.log_out_post = async(req,res)=>{
    res.cookie('jwt','',{maxAge:0});
    res.status(200).json({message:'Logged out successfully'});
}

module.exports.verify_get = (req,res)=>{
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({valid:false});
    }
    
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).json({valid:false});
        }
        User.findById(decoded.id).then(user=>{
            res.status(200).json({valid:true,user});
        }).catch(err=>{
            res.status(401).json({valid:false});
        });
    });
}