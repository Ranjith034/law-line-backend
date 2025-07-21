const express = require("express")

const router = express.Router()

const controllers = require("../controller/admin-controller")




router.post("/verifylawyer" ,controllers.Verifiedlawyer)


module.exports = router