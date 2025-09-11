let users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: 'User created', user });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u, i) => i == id);
  if (index !== -1) {
    users[index] = req.body;
    res.json({ message: `User ${id} updated`, user: users[index] });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((u, i) => i == id);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    res.json({ message: `User ${id} deleted`, user: deleted[0] });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
