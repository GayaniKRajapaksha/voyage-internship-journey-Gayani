const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'appuser',          // new user
  password: 'app_password', // password for new user
  database: 'my_app_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
