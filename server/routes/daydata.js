const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

// daydata route
//get all day data
router.get('/', async (req, res, next) => {
	try {
		let results = await db.allDays();
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});


module.exports = router