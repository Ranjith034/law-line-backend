const mongoose = require("mongoose")
const { v4 } = require("uuid")


const RegisterSchema = new mongoose.Schema({
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
        default: v4
    },
    created:{
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

const Register = mongoose.model("user-reg" , RegisterSchema)

module.exports = Register