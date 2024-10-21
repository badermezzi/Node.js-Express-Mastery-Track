// Importing the express module
const express = require("express");
// Importing the body-parser module to parse incoming request bodies
const bodyParser = require("body-parser");
// Importing the path module to work with file and directory paths
const path = require("path");

// Importing routes for admin and shop
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorControllers = require('./controllers/error')

// Creating an instance of express
const app = express();

// Setting the view engine to EJS and specifying the views directory
app.set("view engine", "ejs")
app.set("views", "views")

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Using the imported routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Middleware to handle 404 errors
app.use(errorControllers.get404Page);

// Starting the server on port 3000
app.listen(3000);
