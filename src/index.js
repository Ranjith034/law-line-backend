const express = require("express")

const app = express()

const connection = require("./config/connection")

const router = require("./routes/reg.router")

const lawyerrouter = require("./routes/lawreg.router")

const adminrouter = require("./routes/admin-verify.router")

const verifylawrouter = require("./routes/verify-ad.router")

const followrouter = require("./routes/follow.router")

const Appoirouter = require("./routes/appionment.router")

const topraterouter = require("./routes/top-rate.router")

const cors = require("cors")

app.use(express.json())

const port  = 7000

const dotenv = require("dotenv").config()

app.use("*" ,cors())

app.use("/static",express.static("src/public/productimages/"))

connection()

app.use(router)

app.use(lawyerrouter)

app.use(adminrouter)

app.use(verifylawrouter)

app.use(followrouter)

app.use(Appoirouter)

app.use(topraterouter)



app.listen(port , () => {
    
    console.log(port , "Running Successfully")
})

