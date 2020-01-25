const express = require('express')
const router=express.Router()
const {signUp,logIn,logOut}=require('../controllers/userAuth')
// const {userById}=require('../controllers/userAuth')
const {userSignupValidator,userLoginValidator}=require('../validator/index')

router.post('/signup',userSignupValidator,signUp);
router.post('/login',userLoginValidator,logIn);
router.get('/logout',logOut);

// router.param("userId",userById)

module.exports=router