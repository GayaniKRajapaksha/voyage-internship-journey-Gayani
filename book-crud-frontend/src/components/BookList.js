// import { useEffect, useState } from "react";
// import { getBooks, deleteBook } from "../api/bookApi";
// import Pagination from "./Pagination";

// export default function BookList() {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     const res = await getBooks();
//     setBooks(res.data);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this book?")) {
//       await deleteBook(id);
//       fetchBooks();
//     }
//   };

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const paginatedBooks = filteredBooks.slice((page-1)*itemsPerPage, page*itemsPerPage);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by title"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th><th>Author</th><th>Price</th><th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedBooks.map(book => (
//             <tr key={book.id}>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>{book.price}</td>
//               <td>
//                 <button onClick={() => window.location.href=`/edit/${book.id}`}>Edit</button>
//                 <button onClick={() => handleDelete(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination
//         currentPage={page}
//         totalItems={filteredBooks.length}
//         itemsPerPage={itemsPerPage}
//         onPageChange={setPage}
//       />
//     </div>
//   );
// }


// src/components/BookList.js
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useBooks } from "../context/BooksContext";
import useDebounce from "../hooks/useDebounce";

const BookRow = React.memo(function BookRow({ book, onEdit, onDelete }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.price}</td>
      <td>
        <button onClick={() => onEdit(book.id)}>Edit</button>
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </td>
    </tr>
  );
});

export default function BookList(){
  const { books, loading, fetchBooks, deleteBook } = useBooks();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 350);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => { fetchBooks(); }, [fetchBooks]);

  const onEdit = useCallback((id) => {
    window.location.href = `/edit/${id}`; // or use navigate
  }, []);

  const onDelete = useCallback(async (id) => {
    if (window.confirm("Delete book?")) {
      await deleteBook(id);
    }
  }, [deleteBook]);

  const filtered = useMemo(() => {
    if (!debouncedSearch) return books;
    const q = debouncedSearch.toLowerCase();
    return books.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
  }, [books, debouncedSearch]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, page]);

  return (
    <div>
      <input
        placeholder="Search title or author..."
        value={search}
        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
      />
      <table>
        <thead>
          <tr><th>Title</th><th>Author</th><th>Price</th><th>Actions</th></tr>
        </thead>
        {loading ? (
          <tbody>
            {Array.from({length: 5}).map((_, i) => (
              <tr key={i}><td colSpan="4"><div className="skeleton skeleton-row" /></td></tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {paginated.map(b => (
              <BookRow key={b.id} book={b} onEdit={onEdit} onDelete={onDelete} />
            ))}
            {paginated.length === 0 && <tr><td colSpan="4">No books found</td></tr>}
          </tbody>
        )}
      </table>

      <div style={{ marginTop: 12 }}>
        {Array.from({length: totalPages}).map((_, i) => (
          <button key={i+1} onClick={() => setPage(i+1)} style={{ fontWeight: page === i+1 ? "bold" : "normal" }}>
            {i+1}
          </button>
        ))}
      </div>
    </div>
  );
}
