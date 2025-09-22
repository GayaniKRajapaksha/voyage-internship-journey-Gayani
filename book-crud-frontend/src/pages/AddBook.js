import BookForm from "../components/BookForm";
import { useBooks } from "../context/BooksContext";
import { useNavigate } from "react-router-dom";

export default function AddBook(){
  const { addBook } = useBooks();
  const nav = useNavigate();

  const handleAdd = async (data) => {
    await addBook(data);
    nav("/");
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <BookForm initialValues={{ title: "", author: "", price: "" }} onSubmit={handleAdd} />
    </div>
  );
}
