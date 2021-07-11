const mysql = require('mysql');

const connectionPool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'chelo',
	password: '1234567',
	database: 'chicken',
	port: 3306,
});

const chickenDB = {};

chickenDB.allDays = () => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * FROM DayData`;
		connectionPool.query(sql, (err, results) => {
			if (err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

chickenDB.allFeeders = () => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * FROM feeder`;
		connectionPool.query(sql, (err, results) => {
			if (err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

chickenDB.allFeeds = () => {
	return new Promise((resolve, reject) => {
		let sql = `SELECT * from feeds`;
		connectionPool.query(sql, (err, results) => {
			if (err) {
				return reject(err);
			}
			return resolve(results);
		});
	});
};

module.exports = chickenDB;

