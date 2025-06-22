import { TodoModel } from "../Model/todo.js";

export const AllTodo = (req, res) => {
  TodoModel.find().then((data) => {
    res.json({
      data: data,
    });
  });
};

export const CreateTodo = (req, res) => {
  const TodoData = {
    todo: "Ders gedirem",
    isDone: true,
  };

  TodoModel.create(TodoData).then(() => {
    res.status(201).json({
      success: true,
      data: TodoData,
    });
  });
};

export const DeleteTodo = (req, res) => {
  const id = req.params.id;

  TodoModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({
        success: true,
        mesaj: "ugurla silindi",
      });
    })
    .catch(() => {
      res.status(404).json({
        success: 404,
        mesaj: "error var",
      });
    });
};
export const UpdateTodo = (req, res) => {
  const id = req.params.id;
  const _data = req.body;
  TodoModel.findByIdAndUpdate(id, _data).then((data) => {
    res.status(200).json({
      success: true,
      mesaj: "ugurla tamamlandi",
    });
    res.status(404).json({
      success: false,
      mesaj: "404 xetasi",
    });
  });
};
