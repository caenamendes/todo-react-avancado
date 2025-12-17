import React, { createContext, useContext, useState, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export function TodoProvider({ children }) {

  const [todos, setTodos] = useLocalStorage("todos_v1", [

    { id: 1, text: "Welcome! Try adding a new task", done: false, createdAt: Date.now() },
  ]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      done: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter(t => t.id !== id));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "completed": return todos.filter(t => t.done);
      case "pending": return todos.filter(t => !t.done);
      default: return todos;
    }
  }, [todos, filter]);

  const value = {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    filter,
    setFilter,
    filteredTodos
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodos must be used inside TodoProvider");
  return ctx;
}