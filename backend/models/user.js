const mongoose=require('mongoose');
const uuidv1 = require("uuid/v1");
const crypto = require('crypto');
const UserSch=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,
        required:true
    },
    hashed_password:{
        type:String,
        trim:true,
        required:true
    },
    salt:String, //it creates hash for plaintext
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date
})
//virtual fields are additional fields for a given model
UserSch.virtual('password')
.set(function(password){
    //create temporary variable called _password
    this._password = password
    //generate a timestamp with package uuid.timestamp=time you create account
    this.salt = uuidv1()
    //encryptPassword()
    this.hashed_password = this.encryptPassword(password)
})
.get(function(){
    return this._password;
});

UserSch.methods ={
    //here plaintext is the password
    authenticate:function(plainText){
      return this.encryptPassword(plainText)===this.hashed_password
    },

    encryptPassword:function(password){
        if(!password)
            return "";
        try{
            return crypto.createHmac("sha1",this.salt)
            .update(password)
            .digest('hex');
        }   
        catch(err){
            return ""
        } 
    }
}
module.exports=mongoose.model("User",UserSch);