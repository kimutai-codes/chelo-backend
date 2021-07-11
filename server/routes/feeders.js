const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

//feeders route
//get all feeders
router.get('/', async (req, res, next) => {
	try {
		let results = await db.allFeeders();
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

module.exports = router;
