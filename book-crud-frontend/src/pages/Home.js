import React from "react";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <div>
      <h1>Book Management</h1>
      <a href="/add">
        <button>Add New Book</button>
      </a>
      <BookList />
    </div>
  );
}
