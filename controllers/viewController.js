const express = require("express");
const router = express.Router();
const db = require("../models");


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
    include: db.Post,
    where: {
      id: req.params.id,
    }
  }).then(function (userResponse) {
    console.log(userResponse.dataValues);
    console.log(userResponse.dataValues.Posts[0].dataValues)
    var hbsObject = {
      id: userResponse.dataValues.id,
      firstName: userResponse.dataValues.firstName,
      lastName: userResponse.dataValues.lastName,
      email: userResponse.dataValues.email,
      github: userResponse.dataValues.github,
      linkedIn: userResponse.dataValues.linkedIn,
      location: userResponse.dataValues.location,
      bio: userResponse.dataValues.bio,
      title: userResponse.dataValues.Posts[0].dataValues.title,
      body: userResponse.dataValues.Posts[0].dataValues.body,
      createdAt: userResponse.dataValues.Posts[0].dataValues.createdAt,
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
