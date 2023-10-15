import { useState } from "react";
//import ToDoChild from "./ToDo-Child";

const ToDoView = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleInputChange1 = (event) => {
    const { title, value } = event.target;
    setTodo({ ...todo, [title]: value });
    console.log(todo);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleInputChange1}
      />

      {/* <input
        type="number"
        name="description"
        value={todo.description}
        onChange={handleInputChange1}
      /> */}
      <button>Add ToDo</button>
      <button>List ToDo</button>
      <button>Show ToDo</button>
      {/* <ToDoChild todolist={todo} /> */}
    </div>
  );
};
export default ToDoView;
