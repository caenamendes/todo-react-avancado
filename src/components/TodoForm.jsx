import React from "react";
import { useTodos } from "../context/TodoContext";
import useInput from "../hooks/useInput";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const input = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input.value);
    input.reset();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="form-row" aria-label="Add todo">
        <input
          className="input"
          placeholder="Add a new task..."
          value={input.value}
          onChange={input.onChange}
          aria-label="New task"
        />
        <button type="submit" className="btn">Add</button>
      </form>
    </div>
  );
}