import { useState } from "react";
import "./Todo.css";

const Todo = ({ id, title, completed, removeTodo }) => {
  const [className, setClassName] = useState("Todo");
  const [isCompleted, setCompleted] = useState(completed);
  const setTodoCompleted = () => {
    setClassName("Todo completed");
    setCompleted(true);
  };
  return (
    <div className={`${className} ${isCompleted ? "completed" : ""}`}>
      <button onClick={() => removeTodo(id)}>🗑️</button>
      <button onClick={() => setTodoCompleted()}>✔</button>
      👉{id} {title}
    </div>
  );
};

export default Todo;
