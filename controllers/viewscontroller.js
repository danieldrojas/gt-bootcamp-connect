const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/signup", function(req, res) {
  res.render("signup")
})

router.get("/profile", function (req, res) {
  res.render("profile");
});

// router.get("/dashboard", function(req,res){ // if turn on i will overwrite my api
//   res.render("dashboard")
// })
router.get("/post", function(req, res) {
  res.render("post");
})
// router.get("/dashboard", function (req, res){
//   res.render("dashboard");
// })
router.get("/edit_profile", function (req, res){
  res.render("edit_profile");
})



module.exports = router;
// another route for the dashboaerd 
// handlebars for dashboard 
// logic needed for dashbaord route to HB file


