const mongoose = require("mongoose")
const {v4} = require("uuid")

const FollowSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    exp:{
        type:Number,
        required:true
    },
    details:{
        type:String
    },
    location:{
        type:String
    },
    ratings:{
        type:Number,
        required:true
    },
   successcase :{
        type:Number
    },
    csYear:{
        type:Number
    },
    userId:{
        type:String,
    },
    _id:{
        type:String,
        default:v4
    
       
        
    },
    originalname:{
        type:String
     },
     filename:{
         type:String
     },
     destination:{
         type:String
     },
    userdet:{
        type:String
    }
     
})

const Followdetails = mongoose.model("user-follow" ,FollowSchema)

module.exports = Followdetails