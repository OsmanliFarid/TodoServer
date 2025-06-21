import express from "express";
import { Welcome } from "./contoroller.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { AllTodo, CreateTodo } from "./Controller/Todo.js";

dotenv.config();
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`server isleyir ${port}`);
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log("ugurla elaqe quruldu");
  });
});

app.get("/todos", AllTodo);

app.post("/todos", CreateTodo);
