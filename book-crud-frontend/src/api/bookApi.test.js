// import { getBooks, addBook, updateBook, deleteBook, getBook } from './bookApi';

// describe('bookApi', () => {
//   test('fetches books', async () => {
//     const res = await getBooks();
//     expect(res.data.length).toBeGreaterThan(0);
//   });

//   test('adds a book', async () => {
//     const res = await addBook({ title: "Test", author: "Someone", price: 20 });
//     expect(res.data.title).toBe("Test");
//   });

//   test('updates a book', async () => {
//     const book = (await getBooks()).data[0];
//     const res = await updateBook(book.id, { price: 99 });
//     expect(res.data.updated).toBe(true);
//   });

//   test('deletes a book', async () => {
//     const book = (await getBooks()).data[0];
//     const res = await deleteBook(book.id);
//     expect(res.data.deleted).toBe(true);
//   });
// });


import { getBooks, addBook, updateBook, deleteBook, getBook } from './bookApi';

describe('bookApi', () => {
  test('fetches books', async () => {
    const res = await getBooks();
    expect(res.data.length).toBeGreaterThan(0);
  });

  test('adds a book', async () => {
    const res = await addBook({ title: "Test", author: "Me", price: 20 });
    expect(res.data.title).toBe("Test");
  });

  test('updates a book', async () => {
    const book = (await getBooks()).data[0];
    await updateBook(book.id, { title: "Updated Title" });
    const updated = await getBook(book.id);
    expect(updated.data.title).toBe("Updated Title");
  });

  test('deletes a book', async () => {
    const book = (await getBooks()).data[0];
    await deleteBook(book.id);
    const res = await getBooks();
    expect(res.data.find(b => b.id === book.id)).toBeUndefined();
  });
});
