const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

//feeders route
//get all feeders
router.get('/', async (req, res, next) => {
	let sql = `SELECT * FROM feeder`;
	db.query(sql, (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

module.exports = router;
