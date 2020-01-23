exports.userSignupValidator=(req,res,next)=>{
    req.check('name','Name is required').notEmpty();
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

    req.check('password',"password is required").notEmpty();
    req.check('password')
    .isLength({min:6})
    .withMessage("Password must contain atleast 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
    //checking errors
    const errors=req.validationErrors()
    if(errors){
        const firstError=errors.map((errors)=>errors.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next();
}

exports.userLoginValidator=(req,res,next)=>{
    req.check('email','Email is required').notEmpty();
    req.check('email','Email must be between 3 to 32')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min:4,
        max:2000
    });
    req.check('password',"password is required").notEmpty();
    req.check('password')
    .isLength({min:6})
    .withMessage("Password must contain atleast 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
    //checking errors
    const errors=req.validationErrors()
    if(errors){
        const firstError=errors.map((errors)=>errors.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next();
}