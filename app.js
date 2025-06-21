import express from "express";
import { Welcome } from "./contoroller.js";

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`server isleyir ${port}`);
});

app.get("/", Welcome);
