require('dotenv').config()
const Restaurant=require("../models/restaurant");
const fs=require('fs')
exports.restDetails= async(req,res)=>{
    const restExists=await Restaurant.findOne({email:req.body.email})
    if(restExists) return res.status(403).json({
        error:"Email is already in use"
    })
    const Exists=await Restaurant.findOne({phone:req.body.phone})
    if(Exists) return res.status(403).json({
        error:"Phone number already in use"
    })
    const newRest = await new Restaurant(req.body)
    await newRest.save()
    res.status(200).json({message:'Restaurant details stored Successsfully!'}) 
}

// exports.allRestDetails = (req,res) =>{
//     const rest =Restaurant.find().select('address restName')
//     .then((rest) => {
//         res.json({rest})
//     })
//     .catch((err)=> console.log(err))
// }