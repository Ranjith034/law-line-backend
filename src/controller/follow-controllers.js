const Followdetails = require("../models/follow")


const follow = async (req,res) => {
    try{
        let {userId} = req.body
        // console.log({userId})
        // let checkfol = await Followdetails.findOne({userId})
        // if(checkfol){
        //     return res.status(409).json({message:"already you followed"})
        // }
        const followdetails = await Followdetails.create(req.body)
        res.json({
            followdetails,
            message:"created successfully"
        })

    }
    catch(err){
        res.json({
            message:`${err}`
        })
    }
}

const getfollowers = async (req,res) => {
   try{
    const {userdet} = req.query
    const findfollowing = await Followdetails.find({userdet})
    if(!findfollowing){
        return res.status(404).json({message:"there is a no followers"})
    }
    res.json(findfollowing)


   }
   catch(err){
    res.json({message:`${err}`})

   }
}

module.exports = {follow,getfollowers}