// src/App.js (short)
import { BrowserRouter } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext";
import AppRoutes from "./routes/AppRoutes";
import "./styles/main.css";
import React, { Suspense } from "react";

export default function App(){
  return (
    <BrowserRouter>
      <BooksProvider>
        <Suspense fallback={<div>Loading app...</div>}>
          <AppRoutes />
        </Suspense>
      </BooksProvider>
    </BrowserRouter>
  );
}
