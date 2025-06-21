import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { AllTodo, CreateTodo, DeleteTodo } from "./Controller/Todo.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;
// listen port
app.listen(port, () => {
  console.log(`Server işləyir: ${port}`);
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Uğurla əlaqə quruldu");
    })
    .catch((err) => {
      console.error("MongoDB əlaqə xətası:", err);
    });
});

//get request
app.get("/todos", AllTodo);

//post request
app.post("/todos", CreateTodo);

app.delete("/todos/:id", DeleteTodo);
