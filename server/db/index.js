const mysql = require('mysql');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'chelo',
	password: '1234567',
	database: 'chicken',
	port: 3306,
	connectionLimit: 10,
});

connection.getConnection((err) => {
	if (err) throw err;
	console.log('db connected');
});

module.exports = connection;
