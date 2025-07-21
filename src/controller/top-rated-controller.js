const TopRatever = require("../models/top-rate")



const toprateval = async (req,res) => {
    try{
        let topr =  await TopRatever.create(req.body)
        res.json({
            topr,
            message:"created successfully"
        })
    }
    catch(err) {
        res.json({
            message:`${err}`
        })
    }
}

const gettop = async (req,res) => {
    try{
        let getp = await TopRatever.find()
        res.json(getp)

    }
    catch(err){
        message:`${err}`

    }
}

module.exports = {toprateval,gettop}