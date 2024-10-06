import express from "express";
import cors from "cors";
import morgran from "morgan";
import productRouter from "./products.js";
// import { authSequelize } from "./config/db.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgran("dev"));
app.use(cors());

// authSequelize();

app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`server started of port ${port}`);
});
