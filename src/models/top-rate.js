const mongoose = require("mongoose")

const {v4} = require("uuid")



const TopratedSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String

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
    successcase:{
        type:Number
    },
    csYear:{
        type:Number
    },
    userId:{
        type:String,
       
        
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

const  TopRatever = mongoose.model("Top-rated-ver" ,TopratedSchema)

module.exports = TopRatever