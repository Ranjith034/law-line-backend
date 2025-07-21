const Admindistibute = require("../models/admin-dis")



const Verifiedlawyer = async (req,res) => {
    try{

        let vdetails = await Admindistibute.create(req.body)
        res.json({
            vdetails,
            message:"created successfully"
        })


    }
    catch(err){
        res.json({message:`${err}`})

    }
}





module.exports = {Verifiedlawyer}