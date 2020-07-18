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

//Getting all post 
router.post("/api/dashboard", (req, res) => {

    console.log(res.body)
    
    db.Post.findAll({}).then(function (dbPosts) {
        res.json(dbPosts)

    
    })
        .catch(function (err) {
            console.log(err)
        res.status(401).json(err);
    });


});

// create a new post
router.post("/api/posts", function (req, res) {
    console.log(req.body)

    db.Post.create({
        title: req.body.title,
        body: req.body.body,
    })
        .then(dbNewMessage => {
            res.json(dbNewMessage)
        })
        // 
        // res.json(req.body)
        // res.redirect(307, "/profile");
        // })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

// /api/alerts/:id
router.put("/api/profile", (req, res) => {


    console.log(req.body)
    db.User.update({
        lastName: req.body.lastName,
    },
        {
            where: {
                id: req.body.id
            }
        }).then(function (update) {
            res.json(update);
        });

});

// delete a post 
router.delete("/api/posts/:id", (req, res) => {

    console.log(req.params.id)
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (post) {
        res.json(post);
    });
});

module.exports = router;