const AppoinmentDeatils = require("../models/appoinment")


const Appoinment = async (req,res) => {
    try{
        const apponlist = await AppoinmentDeatils.create(req.body)
        res.json({
            apponlist,
            message:`created Successfully`
        })

    }
    catch(err){
        res.json({message:`${err}`})

    }
} 

const getAppoinment = async (req,res) => {
    try{
     const {lawyerId} = req.query
     const findfollowing = await AppoinmentDeatils.find({lawyerId})
     if(!findfollowing){
         return res.status(404).json({message:"there is a no followers"})
     }
     res.json(findfollowing)
 
 
    }
    catch(err){
     res.json({message:`${err}`})  
 
    }
 }

 const findappoinment = async (req,res) => {
    try{
        let {email} = req.body
        let checkmail = await AppoinmentDeatils.find({email})
        if(!email){
            res.status(409).json({message:"There is no appointment"})
        }
        res.json(checkmail)

    }
    catch(err){
        res.json({
        message:`${err}`
    })

    }
 }

 const deleteappoinment = async (req,res) => {
    try{
        let {_id} = req.query
        let deleteId = await AppoinmentDeatils.findByIdAndDelete({_id})
        if(!deleteId){
            return res.status(404).json({message:"Id not found"})
        }
        res.json(deleteId)

    }
    catch(err){
        res.json({message:`${err}`})

    }
 }

module.exports = {Appoinment,getAppoinment,findappoinment,deleteappoinment}