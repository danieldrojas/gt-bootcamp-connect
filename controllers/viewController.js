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
  db.User.findAll({
    include: db.Post,
    limit: 3,
    where: {
      id: req.params.id,
    },
    order: [[db.Post, "createdAt", "DESC"]],
  }).then(function (userResponse) {
    // console.log(userResponse[0].dataValues.Posts);
    // console.log(userResponse[0].dataValues.id)
    postsArr = [];
    for (i = 0; i < userResponse[0].dataValues.Posts.length; i++) {
      postsArr.push(userResponse[0].dataValues.Posts[i].dataValues);
    }
    // console.log(userResponse[0].dataValues.Posts[0].dataValues);

    var hbsObject = {
      userInfo: {
        id: userResponse[0].dataValues.id,
        firstName: userResponse[0].dataValues.firstName,
        lastName: userResponse[0].dataValues.lastName,
        email: userResponse[0].dataValues.email,
        github: userResponse[0].dataValues.github,
        linkedIn: userResponse[0].dataValues.linkedIn,
        location: userResponse[0].dataValues.location,
        bio: userResponse[0].dataValues.bio,
      },
      Posts: postsArr,
    };
    // console.log(hbsObject);

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
