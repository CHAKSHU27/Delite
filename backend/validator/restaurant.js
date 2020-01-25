exports.restDetailsValidator=(req,res,next)=>{
    req.check('restName','Restaurant Name is required').notEmpty();
    req.check('address','Address is required').notEmpty()
    req.check('address','Address is not correct')
    .isLength({
        min:20,
        max:100
    });
    req.check('city','Enter city').notEmpty();
    req.check('state','Enter state').notEmpty();
    req.check('firstName','Enter first name').notEmpty();
    req.check('lastName','Enter last name').notEmpty();
    req.check('email','Email is required').notEmpty();
    req.check('email','Email must be between 3 to 32')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min:4,
        max:2000
    });
    req.check('phone','Phone number must be of 10')
    .isLength({
        min:10,
        max:10
    });
    //checking errors
    const errors=req.validationErrors()
    if(errors){
        const firstError=errors.map((errors)=>errors.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next();
}