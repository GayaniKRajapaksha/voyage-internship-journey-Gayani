

// BookForm.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // important for .toBeInTheDocument()
import BookForm from "./BookForm";

// If BookForm uses context or router, wrap it in the providers as needed
// import { BooksProvider } from "../context/BooksContext";

test("renders book form inputs", () => {
  render(<BookForm />); // or wrap in context if needed
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/author/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
});

test("shows validation errors on empty submit", () => {
  render(<BookForm />);
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  expect(screen.getByText(/author is required/i)).toBeInTheDocument();
  expect(screen.getByText(/price is required/i)).toBeInTheDocument();
});
