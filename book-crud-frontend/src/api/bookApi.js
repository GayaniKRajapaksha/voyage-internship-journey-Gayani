// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api/books", // your backend API
// });

// export const getBooks = () => api.get("/");
// export const getBook = (id) => api.get(`/${id}`);
// export const addBook = (data) => api.post("/", data);
// export const updateBook = (id, data) => api.put(`/${id}`, data);
// export const deleteBook = (id) => api.delete(`/${id}`);



// Fake in-memory data store
let books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", price: 10 },
  { id: 2, title: "1984", author: "George Orwell", price: 15 },
];

// Simulate async delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getBooks = async () => {
  await delay(300); // fake loading
  return { data: books };
};


export const getBook = async (id) => {
  await delay(300);
  const book = books.find((b) => b.id === Number(id));
  return { data: book };
};

export const addBook = async (data) => {
  await delay(300);
  const newBook = { id: Date.now(), ...data };
  books.push(newBook);
  return { data: newBook };
};

export const updateBook = async (id, data) => {
  await delay(300);
  books = books.map((b) => (b.id === Number(id) ? { ...b, ...data } : b));
  return { data: { updated: true } };
};

export const deleteBook = async (id) => {
  await delay(300);
  books = books.filter((b) => b.id !== Number(id));
  return { data: { deleted: true } };
};
