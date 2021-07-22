const express = require("express");
const router = express.Router(); //create router
const db = require("../db");

//feeders route
//get all feeders
router.get("/", (req, res, next) => {
  let sql = `SELECT * FROM feeder`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// get one feeder by id
router.get("/:id", (req, res, next) => {
  let sql = `SELECT * FROM feeder WHERE id = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// route to create a record => use post request
router.post("/", (req, res, next) => {
  let newFeeder = req.body; //the data will be send through the body
  let sql = `INSERT INTO feeder SET ?`;
  db.query(sql, newFeeder, (err, results) => {
    if (err) throw err;
    res.json(results); //server response
  });
});

//route to update a record => use put request
router.put("/:id", (req, res) => {
  let sql =
    "UPDATE feeder SET `first_name`=?, `second_name`=?, `feeder_email`=?, `feeder_phone`=?, `is_admin`=?, `feeder_password`=? WHERE id=?";
  db.query(
    sql,
    [
      req.body.first_name,
      req.body.second_name,
      req.body.feeder_email,
      req.body.feeder_phone,
      req.body.is_admin,
      req.body.feeder_password,
      req.params.id,
    ],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

//  route to delete a record => delete request
router.delete("/:id", (req, res) => {
  let sql = "DELETE FROM feeder WHERE id = ?";
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/login", (req, res) => {
  let sql =
    "SELECT * FROM feeder WHERE `first_name`=? AND `second_name`=? AND `feeder_password`=?";
  db.query(
    sql,
    [req.body.first_name, req.body.second_name, req.body.feeder_password],
    (err, results) => {
      if (err) {
        res.send({ err: err });
      }

      if (results.length > 0) {
        res.send(results);
      } else {
        res.send({ message: "Wrong names/password Combination" });
      }
    }
  );
});

module.exports = router;
