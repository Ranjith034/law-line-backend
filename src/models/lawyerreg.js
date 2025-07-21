const mongoose = require("mongoose")
const {v4} = require("uuid")



const LawyerSchema = new mongoose.Schema({
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
    lawtype:{
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
        default: v4
        
    },
    lemail:{
        type:String,
        trim:true,
        required:true
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

const Lawyerdetails = mongoose.model("Lawyer" ,LawyerSchema)

module.exports = Lawyerdetails