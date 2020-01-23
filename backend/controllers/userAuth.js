const jwt=require('jsonwebtoken');
require('dotenv').config()
const expressJwt=require('express-jwt');
const User=require("../models/user");

exports.signUp = async(req,res)=>{
    const userExists=await User.findOne({email:req.body.email})
    if(userExists) return res.status(403).json({
        error:"User already exist"
    })
    const Exists=await User.findOne({phone:req.body.phone})
    if(Exists) return res.status(403).json({
        error:"Phone number already in use"
    })
    if(userExists&&Exists) return res.status(403).json({
        error:"You are already registered"
    })
    const newUser = await new User(req.body)
    await newUser.save()
    res.status(200).json({message:'user created Successsfully! Login to continue'})
};

exports.logIn=(req,res)=>{
    //find the user based on email
    const {email,password} = req.body
        User.findOne({email},(err,user)=>{
            //if error or no user
            if(err|| !user) return res.status(401).json({
              error:"User with that email does not exist. Please signUp."
            })

            //if user is found make sure the email and password matche
            //create authenticate method in user model and use here
            if(!user.authenticate(password)){
            return res.status(401).json({
                error:"Email and password do not match."
            })
            }

            //generate a token with userid and secret. (jwt.sign) for creating signed cookie
            const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);
            //persist the token as 't' in cookie with expiry date
            res.cookie("t",token,{expire:new Date()+86400});
            // return response with user and token to frontend client
            const {_id,name,email}=user;
            return res.json({token,user:{_id,name,email}});
        })
}

exports.logOut=(req,res)=>{
    res.clearCookie("t")
    return res.json({message:"Signout Successfully"})
}

exports.requireLogIn=expressJwt({
    secret:process.env.JWT_SECRET,
    userProperty:"auth"
});