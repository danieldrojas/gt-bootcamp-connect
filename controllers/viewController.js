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
  // Gets user info as well as the 3 most recent posts that they've made
  db.User.findAll({
    include: db.Post,
    limit: 4,
    subQuery: false,
    where: {
      id: req.params.id,
    },
    order: [[db.Post, "createdAt", "DESC"]],
  }).then(function (userResponse) {
    postsArr = [];
    console.log(userResponse[0].dataValues.Posts[0]);
    for (i = 0; i < userResponse[0].dataValues.Posts.length; i++) {
      postsArr.push(userResponse[0].dataValues.Posts[i].dataValues);
    }
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
        idNumbers: userResponse[0].dataValues.Posts.length
      },
      Posts: postsArr,
    };
    res.render("profile", hbsObject);
  });
});


// DASHBOARD
router.get("/dashboard/:categoryId", function (req, res) {
  // if turn on i will overwrite my api
  console.log("Loading dashboard page");
  console.log(req.params.categoryId)
  let catId=req.params.categoryId
 
  db.Post.findAll({
    include: [{ all: true, nested: true }],
    // include: db.User,
    limit: 10,
    subQuery: false,
    order: [["createdAt", "DESC"]],
    where: {
      categoryId: catId,
    },
  })
    .then(function (userResponse) {
      console.log(userResponse);
      let hbsArr = [];
      for (i = 0; i < userResponse.length; i++) {
          hbsArr.push(userResponse[i].dataValues)
      }

      // console.log(hbsArr);
      res.render("dashboard", {Post : hbsArr});

    })
    .catch((err) => {
      throw err;
    });
});

router.get("/post", function (req, res) {
  res.render("post");
});
// router.get("/dashboard", function (req, res) {
//     res.render("dashboard");
// });

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
