import { useState } from "react";

const Todo = () => {
  let [todoval, setTodoval] = useState("");
  let [addTodo, setAddTodo] = useState([]);

  let handleChange = (e) => {
    setTodoval(e.target.value);
  };

  let addTodoTitle = () => {
    let obj = { value: todoval, id: Date.now() };
    // addTodo.push(todoval);
    setAddTodo([...addTodo, obj]);
    setTodoval((todoval = ""));
  };

  let todoDelete = (e) => {
    // let delete=addTodo.filter((e)=>)
    setAddTodo(addTodo.filter((elem) => elem.id !== e));
  };

  return (
    <div>
      <h1>Todo with Function Component</h1>
      <input type="text" onChange={handleChange} value={todoval} />
      <button onClick={addTodoTitle}>Add Todo</button>
      <ol>
        <>
          {addTodo.map((item) => (
            <>
              <li>{item.value}</li>
              <button onClick={() => todoDelete(item.id)}>Delete</button>
            </>
          ))}
        </>
      </ol>
    </div>
  );
};
export default Todo;
