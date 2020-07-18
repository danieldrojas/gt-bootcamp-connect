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

//Getting all users
router.get("/", (req, res) => {
    // if (req.boy) {
    const email = req.body.email;
    console.log("This is email", email);
    console.log("This is password: ", req.body.password);


    // console.log("try  ", db.Validation.isEmail(email))

    db.User.findAll({}).then(function (dbUser) {
        // res.render(dbUser)

        // console.log("This is the email: ", dbUser);
        // res.redirect(307, "/profile");
    })
    //     .catch(function (err) {
    //         console.log(err)
    //     res.status(401).json(err);
    // });


});

// create a new user 
router.post("/api/signup", function (req, res) {
    console.log(req.body)

    db.User.create({
        firstName: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        github: req.body.github,
        linkedIn: req.body.linkedIn,
        bootcamp: req.body.bootcamp,
        gradDate: req.body.gradDate,
        location: req.body.location,
    })
        .then(dbNewUser => {
            res.json(dbNewUser)
            res.redirect(307, "/api/profile")
        })
        // {
        // res.json(req.body)
        // res.redirect(307, "/profile");
        // })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

// update a user
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
router.delete("/api/user/:id", (req, res) => {

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