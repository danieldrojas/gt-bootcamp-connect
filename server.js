const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
//Define variables
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");
const ViewsController = require("./controllers/viewscontroller");
const UserController = require("./controllers/usercontroller");
const PostController = require("./controllers/postcontroller")
// const TestController = require("./controllers/testController")
/**
 * MIDDLEWARE
 */
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
/**VIEW ROUTES
 * API ROUTES
 */
// Serve static content for the app from the "public" directory in the application directory.
app.use("/public", express.static(path.resolve(__dirname, 'public')));
// app.use(express.static("public"));
//routes
app.use(ViewsController);
app.use(UserController);
app.use(PostController);
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