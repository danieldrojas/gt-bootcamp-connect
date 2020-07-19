

const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================
/**
 * Users api
 */

router.post("/", (req, res) => {

    // console.log(req.body)
    
    
    db.User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    }).then(function (dbMember) {

        if (dbMember !== null) {
            console.log("found me!!!!!!!!!!!!!!!!!!!!!")
            res.redirect("/dashboard");  
            res.render("dashboard", dbMember)
            return;
        } 
        return console.log('didnt find me', dbMember)  


        // console.log("This is the email abstract from obj: ", dbMember);
    })
        .catch(function (err) {
            console.log(err)
            res.status(401).json(err);
        });


});


// router.get("/member_data", function (req, res) {

//     db.User.findOne({
//         where: {
//             email: req.body.email,
//             password: req.body.password
//         }
//     }).then(function (dbMember) {

//         if (dbMember) {
//         return    res.json({
//                 email: dbMember.email,
//                 id: dbMember.id
                
//             });
            
//         }
//         return res.json({
//             message: "Invalid password or email!!"
//         });


//         // console.log("This is the email abstract from obj: ", dbMember);
//     })
//         .catch(function (err) {
//             console.log(err)
//             res.status(401).json(err);
//         });
    
// });  


module.exports = router;