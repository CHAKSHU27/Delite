const express = require('express')
const router=express.Router()
const {restDetails}=require('../controllers/Restaurant')
const {requireLogIn}=require('../controllers/userAuth')
const {restDetailsValidator}=require('../validator/restaurant')
 
router.post('/restaurant-details',restDetailsValidator,restDetails);

module.exports=router