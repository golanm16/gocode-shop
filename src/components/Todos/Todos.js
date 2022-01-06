import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "throw the garbage", completed: true },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (title) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
    setNewTodo("");
  };

  const handleRemoveTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
  }, [todos]);

  return (
    <ul className="Todos">
      {todos.map(({ id, title, completed }) => (
        // must have key on the main element
        <Todo
          key={id}
          id={id}
          title={title}
          completed={completed}
          removeTodo={handleRemoveTodo}
        />
      ))}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={() => addTodo(newTodo)}>add Todo</button>
    </ul>
  );
};

export default Todos;
