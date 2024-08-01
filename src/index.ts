import express from "express";
import cors from "cors";
import { dbConnect } from "../config/db";
import router from "../router/router";

const app = express();
const port = 3454;

app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

dbConnect();

app.listen(port, () => {
  console.log("Server is on");
});
