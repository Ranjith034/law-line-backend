const Register = require("../models/user-register")
const {generatetocken} = require("../middlewares/generatetocken")
const fs = require("fs")




const Registerdetails = async (req,res) => {
 
      
   try{

     let {email} = req.body
     console.log(email)
     let checkemail = await Register.findOne({email})
     if(checkemail){
        return res.status(409).json({message:"email already register"})
     }
         
      const file = req.file
      const data = {
          ...req.body,
  
  
  
      }
      
      if(file){
         
              data.destination = file.destination
              data.originalname = file.originalname
              data.filename = file.filename
          }
      




     
     

     let finalregval = await Register.create(data)
     res.json({
        finalregval,
        message:"Register Added"
     })
  }
  catch(err){
    res.json({
        message:`${err}`
        })

  }
}

const getUserdetails = async (req,res) => {
   try{
       
      let userId = req.body
      console.log(userId)
      res.json({userId})
      
   }
   catch(err){
      req.json({
         message:`${err}`
      })
   }
}


const Logindetails = async (req,res) => {
    try{
        let {name , password} = req.body
        let checkname = await Register.findOne({name})
        if(!checkname) {
         return res.status(404).json({message:"user name not found"})
        }
        let checkpassword = await Register.findOne({password})
        if(!checkpassword){
         return res.status(404).json({message:"Wrong Password"})
        }
      //   let token = generatetocken(checkname.userId)
      //   console.log("jwt token",token)
      
        res.json(
         checkname.userId
         // token,message:"Login Successfully"

        )

        }
        
    
    catch(err){
       res.json({message:`${err}`})
    }
}

const getoneuserdetails =  async (req,res) => {
   try{
      let {userId} = req.query
      const finduser = await Register.findOne({userId})
      res.json(finduser)



   }
   catch(err){
     res.json({message:`${err}`})

   }
}

const updateuserdetails = async(req,res) => {
   try{
       let {_id} = req.query
       let newfile = req.file
       const updateuser = await Register.findByIdAndUpdate({_id},req.body,{new:true})
       if(!updateuser){
           return res.status(404).json("id not found")
       }
       if (newfile) {
           
           fs.unlinkSync(`${updateuser.destination}${updateuser.filename}`);
           
           
           
           await Register.findByIdAndUpdate(_id, newfile, { new: true });
       }
       res.json({updateuser})
        
       
   }
   catch(error){
       res.json(`error:${error}`)
   }
}

const findunique = async (req,res) => {
   try{
      let {name} = req.body
      let namessearch = await Register.find({name})
      res.json({namessearch})
   }
   catch(err){
      res.json({message:`${err}`})
   }
}


const findalluser = async (req,res) => {
   try{
      let alluser  = await Register.find()
      res.json(alluser)
   }
   catch(err)
   {  
      res.json({
      message:`&{err}`
   })
   }
}

const deleteuser = async (req,res) => {
   try{
       let {_id} = req.query
       const deleteusid = await Register.findByIdAndDelete(_id)
       fs.unlinkSync(`${deleteusid.destination}${deleteusid.filename}`);
       if(!deleteusid){
          return  res.status(404).json("id not found")
       }
   
       res.json(deleteusid)
   }
   catch(error){
       res.json(`${error}`)
   }
   }















module.exports = {Registerdetails,Logindetails,getUserdetails,getoneuserdetails,updateuserdetails,findunique,findalluser,deleteuser}