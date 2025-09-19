const Users = require('../models/users');

async function test() {
  await Users.createUser('Gayani', 'gayani@gmail.com', '123456');
  console.log(await Users.getUsers());
  console.log(await Users.getUserById(1));
  await Users.updateUser(1, 'Gayani Updated', 'gayani_new@gmail.com', '654321');
  await Users.deleteUser(1);
}

test();
