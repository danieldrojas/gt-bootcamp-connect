// require db from the modles folder 
// create CRUD routes for the following models USER Category and Post (update ,delete )
// module export 

const express = require("express");
const router = express.Router();
const db = require("../models");


// require db from the models folder 
// create CRUD routes for the following models USER Category and Post (update ,delete )
// module export 

// Routes
// =============================================================


router.post("/", (req, res) => {
    // if (req.boy) {
    console.log(req.body)
    return res.json(req.body).redirect(300, "/profile")
    // };
    //     res.status(400).json({
    //         error: true,
    //         data: null,
    //         message: "Unable to create new user.",
    //     });
});


router.post("/api/signup", function (req, res) {
    db.User.create({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
        .then(function () {
            // res.json(req.body)
            res.redirect(307, "/profile");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

// /api/alerts/:id
router.put("api/profile/:id", (req, res) => {
    db.User.update({
        where: {
            id: req.params.id
        }
    }).then(function (post) {
        res.json(post);
    });

});

// /api/users/:id
router.delete("/api/dashboard/:id", (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (post) {
        res.json(post);
    });
});

module.exports = router;