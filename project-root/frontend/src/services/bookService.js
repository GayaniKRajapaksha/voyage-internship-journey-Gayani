import api from './api';

export const getBooks = async () => {
  const res = await api.get('/books'); // resolves to <baseURL>/books
  return res.data;
};
