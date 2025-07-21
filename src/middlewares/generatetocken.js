const jwt = require("jsonwebtoken")
const Register = require("../models/user-register")

const generatetocken = (userId) => {
   console.log(userId)
   let token = jwt.sign({id: userId}, process.env.DUM_TOC ,{ expiresIn: '1d'})
   return token

}  
const verifyToken = async  (req,res,next) => {
   const token = req.headers.authorization
   console.log(token)
   if(!token){
       return res.status(404).json({message:"user login First"})
   }
   const withoutToken = token.split(' ')[1]
   try{
      let payload = jwt.verify(withoutToken,process.env.DUM_TOC)
      console.log("payload",payload.id)

      let checkUser = await Register.findOne({ userId: payload.id })
      console.log("coll",checkUser.userId)
      if(!checkUser) {
          return res.status(404).json({message:"user not found"})
      }
      req.userId = checkUser.userId
      console.log(req.userId)
      next()
  }
  catch(error){
      res.json({error})
  }   
   
}

module.exports = {generatetocken,verifyToken}