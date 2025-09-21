import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getBooks();
        if (mounted) setBooks(data);
      } catch (err) {
        if (mounted) setError(err.message || 'Failed to fetch');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div>Loading books...</div>;
  if (error) return <div style={{color:'red'}}>Error: {error}</div>;

  return (
    <div>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map(b => (
          <article key={b.id} style={{ border: '1px solid #ddd', padding: 12, margin: 8, borderRadius: 6 }}>
            <h3>{b.title}</h3>
            <small>{b.author} — {b.year}</small>
            <p>{b.description}</p>
          </article>
        ))
      )}
    </div>
  );
}
