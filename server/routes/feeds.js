const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

// daydata route
//get all feeds
router.get('/', (req, res, next) => {
	let sql = `SELECT * FROM feeds`;
	db.query(sql, (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

//fetch one feed
router.get('/:id', (req, res, next) => {
	let sql = `SELECT * FROM feeds WHERE id = ?`;
	db.query(sql, [req.params.id], (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

// route to create a record => use post request

router.post('/', (req, res, next) => {
	let newFeeder = req.body; //the data will be send through the body
	console.log(newFeeder);
	let sql = `INSERT INTO feeds SET ?`;
	db.query(sql, newFeeder, (err, results) => {
		if (err) throw err;
		res.json(results); //server response
	});
});
//TODO  route to update a record => use put request
//TODO  route to delete a record => delete request
module.exports = router;
