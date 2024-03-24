import { useState } from "react";

function AddTodo({ setTodos, todos }) {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: new Date().getTime(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };
  return (
    <div>
      <label htmlFor="todo">todo</label>
      <input
        type="text"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="add a new task here ..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
