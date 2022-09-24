import multer from "multer"
import path from'path'

//GUARDAR FILE
let fileStorageEngine = multer.diskStorage({
  destination: (req, file,cb)=>{
    cb(null, path.join(__dirname, "../views/images"))
  },
  filename:(req, file ,cb)=>{
    cb(null,file.originalname)
  }
})
let upload = multer({storage:fileStorageEngine})

export default upload