import React from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoFilters() {
  const { filter, setFilter, todos } = useTodos();
  const total = todos.length;
  const pending = todos.filter(t => !t.done).length;
  const completed = todos.filter(t => t.done).length;

  return (
    <div className="card filters" role="toolbar" aria-label="Filters">
      <div className="small">Tasks: {total}</div>
      <div style={{flex:1}} />
      <button
        className={`btn ${filter === "all" ? "" : "secondary"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`btn ${filter === "pending" ? "" : "secondary"}`}
        onClick={() => setFilter("pending")}
      >
        Pending ({pending})
      </button>
      <button
        className={`btn ${filter === "completed" ? "" : "secondary"}`}
        onClick={() => setFilter("completed")}
      >
        Completed ({completed})
      </button>
      <button
        className="btn danger"
        onClick={() => {
          if (!confirm("Remove all completed tasks?")) return;
          const confirmed = true;
          if (confirmed) {
            alert("Remove completed tasks feature: remove them one by one for safety.");
          }
        }}
        title="Bulk remove (safety prompt)"
      >
        Clear Completed
      </button>
    </div>
  );
}