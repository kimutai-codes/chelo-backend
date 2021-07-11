const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'chelo',
	password: '1234567',
	database: 'chicken',
	port: 3306,
});

connection.connect((err) => {
	if (err) throw err;
	console.log('db connected');
});


module.exports = connection;
