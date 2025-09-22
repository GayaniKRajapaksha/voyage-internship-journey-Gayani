import { useParams, useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import { useBooks } from "../context/BooksContext";
import { useEffect, useState } from "react";

export default function EditBook(){
  const { id } = useParams();
  const { books, updateBook } = useBooks();
  const nav = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const b = books.find(x => Number(x.id) === Number(id));
    if (b) setBook(b);
  }, [books, id]);

  if (!book) return <p>Loading...</p>;

  const handleUpdate = async (data) => {
    await updateBook(id, data);
    nav("/");
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <BookForm initialValues={book} onSubmit={handleUpdate} />
    </div>
  );
}
