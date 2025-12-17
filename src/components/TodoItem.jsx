import React, { memo, useCallback } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItemInner({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  const onToggle = useCallback(() => toggleTodo(todo.id), [toggleTodo, todo.id]);
  const onRemove = useCallback(() => {
    if (confirm("Remove this task?")) removeTodo(todo.id);
  }, [removeTodo, todo.id]);

  return (
    <div className="todo-item" role="listitem" aria-label={`Task ${todo.text}`}>
      <div className="todo-left">
        <div
          role="button"
          className="checkbox"
          onClick={onToggle}
          aria-pressed={todo.done}
          title={todo.done ? "Mark as pending" : "Mark as done"}
        >
          {todo.done ? "✓" : ""}
        </div>
        <div className={`todo-text ${todo.done ? "done" : ""}`}>{todo.text}</div>
      </div>

      <div style={{display:"flex", gap:8, alignItems:"center"}}>
        <div className="small">{new Date(todo.createdAt).toLocaleTimeString()}</div>
        <button className="btn secondary" onClick={onRemove} aria-label="Remove task">Remove</button>
      </div>
    </div>
  );
}
const TodoItem = memo(TodoItemInner, (prevProps, nextProps) => {
  return prevProps.todo.id === nextProps.todo.id && prevProps.todo.done === nextProps.todo.done && prevProps.todo.text === nextProps.todo.text;
});

export default TodoItem;