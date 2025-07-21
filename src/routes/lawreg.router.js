const express = require("express")

const controllers = require("../controller/lawyer-reg")

const upload = require("../middlewares/file")

const router = express.Router()

router.post('/lawyerreg' ,upload, controllers.LawyerDet)
router.get('/getlawerd' ,controllers.getlawyer)
router.post('/getonelawyer',controllers.getonelawyer)
router.get('/lawyeruid' ,controllers.lawyerid)
router.get('/lawyerverf',controllers.lawyerunder)
router.put('/lawyerupdate',upload, controllers.updatelawpro)

module.exports = router