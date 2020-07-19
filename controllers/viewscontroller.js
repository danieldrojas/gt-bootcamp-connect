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

// router.get("/dashboard", function(req,res){
//   res.render("dashboard")
// })

module.exports = router;
