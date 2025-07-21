const express = require("express")

const controllers = require("../controller/verifiedlawyer.controller")

const router = express.Router()



router.get("/getverflawer" ,controllers.getverif)

module.exports = router