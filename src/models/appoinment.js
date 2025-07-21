const mongoose = require("mongoose")
const {v4} = require("uuid")


const AppoinmentSchema = new mongoose.Schema({
    _id:{
        type:String,
        default: v4
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: Number
    },
    ondate: {
        type: String
    },
    originalname: {
        type: String
    },
    filename: {
        type: String
    },
    destination: {
        type: String
    },
    uniqueuserId: {
        type: String
    },
    lawyerId:{
        type:String,
        required:true
    },
    
    
},{timestamps:true});



const AppoinmentDeatils = mongoose.model("Appoinment", AppoinmentSchema)

module.exports = AppoinmentDeatils

