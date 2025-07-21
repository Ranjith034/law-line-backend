const express = require("express")

const controllers = require("../controller/appoinment-controller")


const router = express.Router()



router.post("/appoinment", controllers.Appoinment)
router.get("/appoinmentval", controllers.getAppoinment)
router.post("/findapp",controllers.findappoinment)
router.delete("/deleteapp",controllers.deleteappoinment)

module.exports = router