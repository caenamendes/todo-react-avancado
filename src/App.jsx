import React from "react";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="app-root">
      <header className="header">
        <h1>Advanced Todo App</h1>
        <p className="muted">React • Context • custom hooks • memoization</p>
      </header>

      <main className="container">
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </main>

      <footer className="footer">
        <small>Built with React • useContext • useMemo • custom hooks</small>
      </footer>
    </div>
  );
}