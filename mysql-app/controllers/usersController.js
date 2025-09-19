const Users = require('../models/users');

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const result = await Users.createUser(name, email, password);
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await Users.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await Users.getUserById(req.params.id);
    res.json(user || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const result = await Users.updateUser(req.params.id, name, email, password);
    res.json({ success: result.affectedRows > 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    const result = await Users.deleteUser(req.params.id);
    res.json({ success: result.affectedRows > 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
