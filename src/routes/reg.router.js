const express = require("express")

const controllers = require("../controller/user-reg-controller")
// const { verifyToken } = require("../middlewares/generatetocken")

const upload = require("../middlewares/file")

const router = express.Router()

router.post("/reg" ,upload,controllers.Registerdetails)
router.post("/log", controllers.Logindetails)
router.get("/home", controllers.getUserdetails)
router.get("/user" ,controllers.getoneuserdetails)
router.put("/updateus",upload,controllers.updateuserdetails)
router.get("/follow",controllers.findunique)
router.get("/alluser", controllers.findalluser)
router.delete("/deleteuser",upload,controllers.deleteuser)


module.exports = router