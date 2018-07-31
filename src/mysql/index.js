var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'testuser',
  password : 'password',
  database : 'testdb'
});

connection.connect();

connection.query('SELECT name FROM products limit 5', function (error, results) {
  if (error) {
    throw error;
  }
  console.log(results);
});

connection.end();