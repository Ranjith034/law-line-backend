const Lawyerdetails = require("../models/lawyerreg")
const fs = require("fs")

const LawyerDet = async (req,res) => {
    try{
         
        const file = req.file
        const data = {
            ...req.body,
    
    
    
        }
        
        if(file){
           
                data.destination = file.destination
                data.originalname = file.originalname
                data.filename = file.filename
            }
        
    
        let Lawyervalues = await Lawyerdetails.create(data)
    
        res.json({
            Lawyervalues,
            created:"Successfully",
            message:"products added"
        })
    }
    catch(error){
        res.json({
            error:`${error}`
        })
    }
    }

const getlawyer = async (req,res) => {
    try{
        let lawerdata = await Lawyerdetails.find()
        res.json(lawerdata)

    }
    catch(err){
        res.json({message:`${err}`})

    }
}

const getonelawyer = async (req,res) => {
    try{
    let {name,details} = req.body
    let auth = await Lawyerdetails.findOne({name,details})
    if(!auth){
       return  res.status(404).json({message:"Register First"})
    }
    res.json(auth.userId)
}
    catch(err){
        res.json({message:`${err}`})
    }
}

const lawyerid = async (req,res) => {
    try{
    let {userId} = req.query
    let finduser = await Lawyerdetails.findOne({userId})
    res.json(finduser)
    }
    catch(err){
        res.json({message:`${err}`})
    }
}

const lawyerunder = async (req,res) => {
    try{
    let {_id} = req.query
    let findlawyer = await Lawyerdetails.findOne({_id})
    res.json(findlawyer)
    }
    catch(err){
        res.json({message:`${err}`})
    }
}

const updatelawpro = async(req,res) => {
    try{
        let {_id} = req.query
        let newfile = req.file
        const updatelawyer = await Lawyerdetails.findByIdAndUpdate({_id},req.body,{new:true})
        if(!updatelawyer){
            return res.status(404).json("id not found")
        }
        if (newfile) {
            
            fs.unlinkSync(`${updatelawyer.destination}${updatelawyer.filename}`);
            
            
            await Lawyerdetails.findByIdAndUpdate(_id, newfile, { new: true });
        }
        res.json({updatelawyer})
         
        
    }
    catch(error){
        res.json(`error:${error}`)
    }
}



module.exports = {LawyerDet,getlawyer,getonelawyer,lawyerid,lawyerunder,updatelawpro}