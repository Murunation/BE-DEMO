import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})

const multerHandler = multer({storage})

export default multerHandler;