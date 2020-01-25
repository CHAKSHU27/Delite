const express = require('express')
const router=express.Router()
const {restDetails,allResDetails}=require('../controllers/Restaurant')
const {restDetailsValidator}=require('../validator/restaurant')
 
router.get('/all/restaurant-details',allResDetails)
router.post('/restaurant-details',restDetailsValidator,restDetails);

module.exports=router