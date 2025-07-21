const express = require("express")

const router = express.Router()

const controllers = require("../controller/follow-controllers")

router.post("/followpoint",controllers.follow)
router.get("/getfol",controllers.getfollowers)

module.exports = router