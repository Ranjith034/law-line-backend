const express = require("express")

const controllers = require("../controller/top-rated-controller")

const router = express.Router()



router.post("/toprate",controllers.toprateval)
router.get("/topget",controllers.gettop)

module.exports = router