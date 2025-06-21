import { model, Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    todo: String,
    isDone: Boolean,
  },
  {
    versionKey: false,
  }
);

export const TodoModel = model("Todo", TodoSchema);
