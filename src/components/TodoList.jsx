import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { filteredTodos } = useTodos();

  return (
    <div className="card">
      <h3 style={{marginTop:0}}>Todo List</h3>
      <div className="todo-list" role="list" aria-label="Todo items">
        {filteredTodos.length === 0 ? (
          <div className="small">No tasks here — add your first one!</div>
        ) : (
          filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}