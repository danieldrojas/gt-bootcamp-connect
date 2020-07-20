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


// Getting all post 
router.get("/dashboard", (req, res) => {
    console.log('WE HIT DASHBOARD ROUTE!!!');
    // console.log(res.body);

    db.Post.findAll({}).then(function (dbPosts) {


        db.User.findAll({}).then(dbUser => {
            console.log('this is for user!', dbUser[0].dataValues.id)


            const post = {
                posts: [],

            }

            const userNames = [];

            //Print on dashboard the posts with an user
            for (let i = 0; i < dbUser.length; i++) {
                console.log('this is each post!!', dbPosts[i].dataValues.UserId)
                if (dbUser[i].dataValues.id === dbPosts[i].dataValues.UserId) {
                    console.log(dbUser[i].dataValues.firstName)
                    console.log(dbUser[i].dataValues.lastName)   
                    dbPosts[i].dataValues.firstName = dbUser[i].dataValues.firstName;
                    dbPosts[i].dataValues.lastName = dbUser[i].dataValues.lastName;               

                    post.posts.push(dbPosts[i].dataValues)


                }
                  

            }
            res.render("dashboard", post);
        })
    });
});

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
router.put("/api/edit_profile/:id", (req, res) => {
  console.log(req.body);
  db.Post.update(
    {
      location: req.body.location,
      github: req.body.github,
      linkedin: req.body.linkedin,
      bio: req.body.bio,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
});
module.exports = router;
