const express = require("express");
const session = require("express-session")
const exphbs = require("express-handlebars");
const path = require("path");
// const passport = require("./config/passport")
//Define variables
const PORT = process.env.PORT || 8080;
const app = express();
const passport = require("passport");
// const path = require("path");
const db = require("./models");
const ViewsController = require("./controllers/viewscontroller");
const APIController = require("./controllers/apiController")

// const TestController = require("./controllers/testController")
const UserController = require("./controllers/usercontroller");
const PostController = require("./controllers/postcontroller")
const LoginController = require("./controllers/logincontroller")
/**
 * MIDDLEWARE
 */
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//handlebars setup
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// added console log to handlebars  
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    log: function(something) {
      console.log(something);
    }
   }));
app.set("view engine", "handlebars");

/**VIEW ROUTES
 * API ROUTES
 */
// Serve static content for the app from the "public" directory in the application directory.
// app.use('/public/', express.static(path.join(__dirname, 'public')))
// app.use(express.static("public"));
// passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// VIEW ROUTES



 // API ROUTES
 
// Serve static content for the app from the "public" directory in the application directory.
// app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.use(express.static("public"));
//routes
app.use(ViewsController);
app.use(UserController);
app.use(PostController);
app.use(LoginController);
// app.use("/api/test/", TestController) //run all traffic that has "/api/test/" into TestController
/**
 * gets wrapped up in DB Connection
 * APP LISTEN
 */
db.sequelize
    // .sync({force: true})
    .sync()

    .then(() => {
        app.listen(PORT, function () {
            // Log (server-side) when our server has started
            console.log(`Server listening on: http://localhost:${PORT}`);
        });
    
    }).catch(err => {
        console.log("error connecting to the db")
        console.log(err)
    });