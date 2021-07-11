const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

// daydata route
//get all day data

router.get('/', (req, res, next) => {
	let sql = `SELECT * FROM DayData`;
	db.query(sql, (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

module.exports = router;
