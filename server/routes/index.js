const express = require('express');
const router = express.Router(); //create router
const db = require('../db');

router.get('/', async (req, res, next) => {
	try {
		let results = await db.all();
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

//export
module.exports = router;
