import React from 'react';

export default function TodoSummary({ todos }) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="summary" aria-live="polite">
      <p>Total: <strong>{total}</strong></p>
      <p>Completed: <strong>{completed}</strong></p>
      <p>Pending: <strong>{pending}</strong></p>
    </div>
  );
}
