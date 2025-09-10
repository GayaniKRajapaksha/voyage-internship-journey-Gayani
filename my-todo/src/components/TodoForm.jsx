import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const validate = (v) => {
    if (!v.trim()) return 'Please enter a todo.';
    if (v.trim().length > 100) return 'Todo must be 100 characters or less.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(text);
    if (err) {
      setError(err);
      return;
    }
    onAdd(text.trim());
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form" aria-label="Add todo">
      <input
        value={text}
        onChange={(e) => { setText(e.target.value); if (error) setError(validate(e.target.value)); }}
        placeholder="What needs doing?"
        aria-label="Todo text"
        maxLength={150}
      />
      <button type="submit" aria-label="Add todo">Add</button>
      {error && <div className="error" role="alert">{error}</div>}
    </form>
  );
}
