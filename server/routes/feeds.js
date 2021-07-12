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
	let newFeed = req.body; //the data will be send through the body
	let sql = `INSERT INTO feeds SET ?`;
	db.query(sql, newFeed, (err, results) => {
		if (err) throw err;
		res.json(results); //server response
	});
});
//  route to update a record => use put request
router.put('/:id', (req, res) => {
	let sql = 'UPDATE feeds SET `feed_name`=?,`feed_price`=? WHERE id=?';
	db.query(
		sql,
		[req.body.feed_name, req.body.feed_price, req.params.id],
		(err, results) => {
			if (err) throw err;
			res.json(results);
		}
	);
});

//TODO  route to delete a record => delete request
module.exports = router;
