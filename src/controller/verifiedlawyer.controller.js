const Admindistibute = require("../models/admin-dis")



const getverif = async (req,res) => {
    try{
        const finalverlaw = await  Admindistibute.find()
        res.json(finalverlaw)

    }
    catch(err) {
        res.json({message:`${err}`})

    }
}



module.exports = {getverif}

