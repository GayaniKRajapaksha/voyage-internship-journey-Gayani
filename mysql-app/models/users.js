const db = require('../db');

async function createUser(name, email, password) {
  const [result] = await db.execute(
    'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  return result;
}

async function getUsers() {
  const [rows] = await db.execute('SELECT * FROM Users');
  return rows;
}

async function getUserById(id) {
  const [rows] = await db.execute('SELECT * FROM Users WHERE id = ?', [id]);
  return rows[0];
}

async function updateUser(id, name, email, password) {
  const [result] = await db.execute(
    'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id]
  );
  return result;
}

async function deleteUser(id) {
  const [result] = await db.execute('DELETE FROM Users WHERE id = ?', [id]);
  return result;
}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
