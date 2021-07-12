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

// get one feeder by id
router.get('/:id', (req, res, next) => {
	let sql = `SELECT * FROM feeder WHERE id = ?`;
	db.query(sql, [req.params.id], (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

// route to create a record => use post request
router.post('/', (req, res, next) => {
	let newFeeder = req.body; //the data will be send through the body
	console.log(newFeeder);
	let sql = `INSERT INTO feeder SET ?`;
	db.query(sql, newFeeder, (err, results) => {
		if (err) throw err;
		res.json(results); //server response
	});
});

//TODO  route to update a record => use put request
//TODO  route to delete a record => delete request
module.exports = router;
