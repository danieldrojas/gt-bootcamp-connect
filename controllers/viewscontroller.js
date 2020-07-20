const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/signup", function (req, res) {
  res.render("signup")
})

router.get("/profile/:id", function (req, res) {
  console.log("in profile views controller");
  console.log(req.params);
  db.User.findOne({
    where: {
      id: req.params.id
    }

  })
    .then(function (userResponse) {
      console.log(userResponse)

      var hbsObject = {
        profileUser: userResponse.dataValues
      };
      console.log(hbsObject);
      res.render("profile", hbsObject);

    })



});

router.get("/dashboard", function (req, res) {
  res.render("dashboard")
})

module.exports = router;
// another route for the dashboaerd
// handlebars for dashboard 
// logic needed for dashbaord route to HB file


