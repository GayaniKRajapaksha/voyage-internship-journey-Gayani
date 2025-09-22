// src/routes/AppRoutes.js
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const AddBook = lazy(() => import("../pages/AddBook"));
const EditBook = lazy(() => import("../pages/EditBook"));

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  );
}
