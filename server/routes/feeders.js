const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

//feeders route
//get all feeders
router.get('/', (req, res, next) => {
	let sql = `SELECT * FROM feeder`;
	db.query(sql, (err, results) => {
		if (err) throw err;
		res.json(results);
		console.log(results);
	});
});

//get one feeder by id
router.get('/:id', (req, res, next) => {
	let sql = `SELECT * FROM feeder WHERE id = ?`;
	db.query(sql, [req.params.id], (err, results) => {
		if (err) throw err;
		// res.end(JSON.stringify(results));
    res.json(results)
	});
});

//TODO route to create a record
//TODO  route to update a record
//TODO  route to delete a record

module.exports = router;
