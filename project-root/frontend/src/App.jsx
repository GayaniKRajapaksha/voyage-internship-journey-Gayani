import React from 'react';
import BookList from './components/BookList';

export default function App() {
  return (
    <div style={{maxWidth: 900, margin: '20px auto', fontFamily: 'sans-serif'}}>
      <h1>Book listing</h1>
      <BookList />
    </div>
  );
}
