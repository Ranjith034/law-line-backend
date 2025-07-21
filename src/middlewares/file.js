const multer = require("multer")


const storage = multer.diskStorage({
    destination:"src/public/productimages/",
    filename:(req,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage
})

const Singleupload = upload.single("uploadfile")
module.exports = Singleupload
