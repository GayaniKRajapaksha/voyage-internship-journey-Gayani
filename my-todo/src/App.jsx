import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodoSummary';

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todos')) || [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState('all'); // all | active | completed

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id) =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id) =>
    setTodos(prev => prev.filter(t => t.id !== id));

  const editTodo = (id, newText) =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, text: newText } : t)));

  const clearCompleted = () => setTodos(prev => prev.filter(t => !t.completed));

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="app">
      <header>
        <h1>Todo — State & Events</h1>
        <p className="subtitle">Practice useState, controlled forms, lifting state, and validation</p>
      </header>

      <main className="card">
        <TodoForm onAdd={addTodo} />

        <div className="controls-row">
          <div className="filters" role="tablist" aria-label="Filter todos">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
          </div>
          <button onClick={clearCompleted} className="danger">Clear completed</button>
        </div>

        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />

        <TodoSummary todos={todos} />
      </main>

      <footer className="note">Tip: double-click a todo to edit. Press Enter to save, Esc to cancel.</footer>
    </div>
  );
}
