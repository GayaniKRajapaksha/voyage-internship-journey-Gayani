import React, { useState, useRef, useEffect } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing && inputRef.current) inputRef.current.focus();
  }, [editing]);

  const submitEdit = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      // don't allow empty; revert
      setValue(todo.text);
      setEditing(false);
      return;
    }
    if (trimmed !== todo.text) onEdit(todo.id, trimmed);
    setEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark ${todo.text} complete`}
      />

      {editing ? (
        <input
          ref={inputRef}
          className="edit-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submitEdit();
            if (e.key === 'Escape') { setValue(todo.text); setEditing(false); }
          }}
        />
      ) : (
        <span className="todo-text" onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      )}

      <div className="controls">
        <button onClick={() => setEditing(!editing)} aria-label={editing ? 'Cancel edit' : 'Edit'}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
        <button onClick={() => onDelete(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
      </div>

      {editing && <button className="save-btn" onClick={submitEdit}>Save</button>}
    </li>
  );
}
