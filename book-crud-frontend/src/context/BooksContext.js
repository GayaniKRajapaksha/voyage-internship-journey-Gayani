// src/context/BooksContext.js
import React, { createContext, useReducer, useCallback, useMemo, useContext } from "react";
import * as api from "../api/bookApi"; // works with your mock or real API

const BooksContext = createContext();

const initialState = { books: [], loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING": return { ...state, loading: action.payload };
    case "SET_ERROR":   return { ...state, error: action.payload, loading: false };
    case "SET_BOOKS":   return { ...state, books: action.payload, loading: false, error: null };
    case "ADD_BOOK":    return { ...state, books: [...state.books, action.payload] };
    case "UPDATE_BOOK": return { ...state, books: state.books.map(b => b.id === action.payload.id ? { ...b, ...action.payload.data } : b) };
    case "DELETE_BOOK": return { ...state, books: state.books.filter(b => b.id !== action.payload) };
    default: return state;
  }
}

export function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBooks = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await api.getBooks();
      dispatch({ type: "SET_BOOKS", payload: res.data });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message || "Fetch failed" });
    }
  }, []);

  const addBook = useCallback(async (book) => {
    const res = await api.addBook(book);
    dispatch({ type: "ADD_BOOK", payload: res.data });
    return res.data;
  }, []);

  const updateBook = useCallback(async (id, data) => {
    const res = await api.updateBook(id, data);
    dispatch({ type: "UPDATE_BOOK", payload: { id: Number(id), data } });
    return res.data;
  }, []);

  const deleteBook = useCallback(async (id) => {
    await api.deleteBook(id);
    dispatch({ type: "DELETE_BOOK", payload: Number(id) });
  }, []);

  const value = useMemo(() => ({
    books: state.books,
    loading: state.loading,
    error: state.error,
    fetchBooks,
    addBook,
    updateBook,
    deleteBook
  }), [state.books, state.loading, state.error, fetchBooks, addBook, updateBook, deleteBook]);

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
}

export const useBooks = () => useContext(BooksContext);
