// require db from the modles folder
// create CRUD routes for the following models USER Category and Post (update ,delete )
// module export
const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================
/**
 * Users api
 */

// Getting posts by general btn
router.get("/dashboard/btn", (req, res) => {
  console.log("WE HIT DASHBOARD ROUTE!!!");
  console.log("passing from front end ", req)
  db.Post.findAll({
    where: {
      CategoryId: req.body.CategoryId
    }
  }).then(dbPosts => {
    console.log("the posts im getting",dbPosts)
    res.render("dashboard", dbPosts)
  })
})
router.post("/dashboard/btn", (req, res) => {
  console.log("WE HIT DASHBOARD ROUTE!!!");
  console.log("passing from front end ", req.body.CategoryId)
  db.Post.findAll({
    where: {
      CategoryId: req.body.CategoryId
    }
  }).then(dbPosts => {
    console.log("the posts im getting", dbPosts)
    res.render("dashboard", dbPosts)
  })
})

// Getting all post
router.post("/api/dashboard", (req, res) => {
  console.log(res.body);

  db.Post.findAll({})
    .then(function (dbPosts) {
      res.json(dbPosts);
    })
    .catch(function (err) {
      console.log(err);
      res.status(401).json(err);
    });
});

// create a new post
router.post("/api/posts", function (req, res) {
  console.log(req.body);

  db.Post.create({
    title: req.body.title,
      body: req.body.body,
      UserId: req.body.id,
      CategoryId: req.body.categoryId
      
  })
    .then((dbNewMessage) => {
      res.json(dbNewMessage);
    })

    .catch(function (err) {
      res.status(401).json(err);
    });
});

// update post
router.put("/api/dashboard", (req, res) => {
  db.Post.update(
    {
      title: req.body.title,
          body: req.body.body,
      
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((dbUpdatedMessage) => {
      console.log;
      res.json(dbUpdatedMessage);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// delete a post
router.delete("/api/dashboard/:id", (req, res) => {
  console.log(req.params.id);
  db.Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (post) {
    res.json(post);
  });
});

// NEW PUT PATH FOR EDITING PROFILE
router.put("/api/edit_profile/", (req, res) => {
//   console.log(sessionStorage.getItem("currentUser"));
  console.log(req.body.location);
  console.log(req.body.github);
  console.log(req.body.linkedIn);
  console.log(req.body.bio);
  console.log(req.body.id)
  db.User.update(
    {
      location: req.body.location,
      github: req.body.github,
      linkedIn: req.body.linkedIn,
      bio: req.body.bio,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((dbres)=>{
      res.json(dbres)
      console.log("DB UPDATED")
  });
});
module.exports = router;

router.post("/dashboard",function(req,res){
  categoryId = req.body.categoryId;
  res.end()
})