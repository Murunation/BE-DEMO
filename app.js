import express from "express";
import cors from "cors";
import productRouter from "./controller/product-controller.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
  console.log("Listening on port", port);
});
