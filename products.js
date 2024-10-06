import { Router } from "express";
import { upload } from "./config/multer.js";

const productRouter = Router();

productRouter.post("/", upload.single("image"), (req, res, next) => {
  console.log(req.body);
  console.log(req.file);

  res.send("ok");
});

export default productRouter;
