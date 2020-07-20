/**
 *  THIS FILES HAS THE ROUTES TO CREATE A NEW USER
 */

const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("passport");

// Routes
// =============================================================

//  Login Route
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

// Sign Up Route
router.post("/api/signup", function (req, res) {
  console.log(req.body);

  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    github: req.body.github,
    linkedIn: req.body.linkedIn,
    bootcamp: req.body.bootcamp,
    gradDate: req.body.gradDate,
    location: req.body.location,
  })
    .then((dbNewUser) => {
      console.log("dbNewUser", dbNewUser);
      res.json(dbNewUser);
    //   res.redirect(307, "/api/login");
      res.redirect(307, "/api/dashboard");

    })
        .then(dbNewUser => {
            console.log("in user controller")
          console.log(dbNewUser.dataValues);
            res.redirect(307, "/profile" + dbNewUser.dataValues.id)
        })

        // {
        // res.json(req.body)
        // res.redirect(307, "/profile");
        // })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

// update a user
router.put("/api/profile", (req, res) => {
  console.log(req.body);
  db.User.update(
    {
      lastName: req.body.lastName,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(function (update) {
    res.json(update);
  });
});

// delete a post
// router.delete("/api/user/:id", (req, res) => {
//   console.log(req.params.id);
//   db.User.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then(function (post) {
//     res.json(post);
//   });
// });

module.exports = router;
