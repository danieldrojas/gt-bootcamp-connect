const express = require("express");
const router = express.Router();
const db = require("../models");
const post = require("../models/post")

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

// Navigate to profile of specific person
router.get("/profile/:id", function (req, res) {
  console.log("Loading Profile Page");
  // console.log(req.params);
  db.User.findOne({
    // include: [post],
    where: {
      id: req.params.id,
    }
  }).then(function (userResponse) {
    // console.log(userResponse.dataValues);
    var hbsObject = {
      profileUser: userResponse.dataValues,
    };
    console.log(hbsObject);
    res.render("profile", hbsObject);
  });
});

// router.get("/dashboard", function(req,res){ // if turn on i will overwrite my api
//   res.render("dashboard")
// })
router.get("/post", function (req, res) {
  res.render("post");
});
router.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

router.get("/edit_profile/:id", function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    res.render("edit_profile", data.dataValues);
  });
});

module.exports = router;
// another route for the dashboaerd this os to make it work
// handlebars for dashboard
// logic needed for dashbaord route to HB file
