const mongoose = require("mongoose")

const connection = () =>  {
    try{
        mongoose.connect(process.env.MONG_CON)
        console.log("Mongoose Connected Successfully")
    }
    catch(err){
        console.log(err)

    }
}

module.exports = connection