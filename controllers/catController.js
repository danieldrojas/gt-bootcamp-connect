/**
 *  THIS FILES HAS THE ROUTES TO CREATE A NEW USER
 */

const express = require("express");
const router = express.Router();
const db = require("../models");
// const category = require("../models/category");

// Routes
// =============================================================


router.post("/api/categories", function (req, res) {
  console.log("router.post catController 15", req.body);

  db.Category.create({
      category: req.body.category,
  })
    .then((dbNewCat) => {
      console.log("dbNewCat", dbNewCat);
      res.json(dbNewCat);
    })
        .then(dbNewCat => {
            res.json(dbNewCat)
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

module.exports = router;