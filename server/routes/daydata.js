const express = require("express");
const router = express.Router(); //create router
const db = require("../db");

// daydata route
//get all day data
router.get("/", (req, res, next) => {
  let sql = `SELECT * FROM DayData`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//fetch specific day
//TODO make it accurate
//can use datetime format to make it unique and then in the ui just use the date part for convenience
router.get("/:id", (req, res, next) => {
  let sql = `SELECT * FROM DayData WHERE day_recorded = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// route to create a record => use post request
router.post("/", (req, res, next) => {
  let newDay = req.body; //the data will be send through the body
  let sql = `INSERT INTO DayData SET ?`;
  db.query(sql, newDay, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//TODO  route to update a record => use put request
//TODO  route to delete a record => delete request

module.exports = router;
