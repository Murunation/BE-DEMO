import express from "express";
import multerHandler from "../Util/multer-handler.js";
import uploadCloud from "../config/cloudinary-config.js";

const productRouter = express.Router();

productRouter.post(
  "/addproduct",
  multerHandler.single("file"),
  async (req, res) => {
    console.log(req.file);
    const {secure_url} = await uploadCloud.uploader.upload(req.file.path, {
      folder: "test",
    });
    // console.log("result from cloud: ", resultFromCloud);
    const newProduct = {
        image: secure_url,
        ...JSON.parse(req.body.details)
    }
    console.log("new products: ", newProduct);
  }
);

export default productRouter;
