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

//fetch specific day
//can use datetime format to make it unique and then in the ui just use the date part for convenience
router.get('/:id', (req, res, next) => {
	let sql = `SELECT * FROM DayData WHERE day_recorded = ?`;
	db.query(sql, [req.params.id], (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

// route to create a record => use post request
router.post('/', (req, res, next) => {
	let newDay = req.body; //the data will be send through the body
	let sql = `INSERT INTO DayData SET ?`;
	db.query(sql, newDay, (err, results) => {
		if (err) throw err;
		res.json(results);
		console.log(req.body);
	});
});
//  route to update a record => use put request

router.put('/:id', (req, res) => {
	let sql =
		'UPDATE DayData SET `feed_quantity`=?, `water_amount`=?, `chicken_number`=?, `health`=?, `eggs_collected`=?, `price_per_egg`=?, `feeder_id`=?, `feed_id`=? WHERE day_recorded=?';
	db.query(
		sql,
		[
			req.body.feed_quantity,
			req.body.water_amount,
			req.body.chicken_number,
			req.body.health,
			req.body.eggs_collected,
			req.body.price_per_egg,
			req.body.feeder_id,
			req.body.feed_id,
			req.params.id,
		],
		(err, results) => {
			if (err) throw err;
			res.json(results);
		}
	);
	console.log(req.params);
});

//  route to delete a record => delete request
router.delete('/:id', (req, res) => {
	let sql = 'DELETE FROM DayData WHERE day_recorded = ?';
	db.query(sql, [req.params.id], (err, results) => {
		if (err) throw err;
		res.json(results);
	});
});

module.exports = router;
