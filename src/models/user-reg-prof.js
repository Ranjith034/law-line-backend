const mongoose = require("mongoose")



const UprofileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:Number
        
    },
    password:{
        type:String,
        required:true
    },
    verifyPassword:{
        type:String,
        required:true
    },
    userId:{
        type:String,
       
    },
    created:{
        type:String
    },
    _id:{
        type:String
    },

     
    originalname:{
        type:String
     },
     filename:{
         type:String
     },
     destination:{
         type:String
     }


},{timestamps:true})

const ProfileRegister = mongoose.model("user-reg" , UprofileSchema)

module.exports = ProfileRegister