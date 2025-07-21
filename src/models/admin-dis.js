const mongoose = require("mongoose")

const {v4} = require("uuid")



const AdminSchema = new mongoose.Schema({
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
    lawtype:{
        type:String

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

const  Admindistibute = mongoose.model("Verified-Lawyer" ,AdminSchema)

module.exports = Admindistibute