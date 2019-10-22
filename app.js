const express = require("express");
const app = express();

// used to create a dynamic path
const path = require("path");

// import various routes from our route directory
const routes = require("./routes");

// creates a path to where our static files are stored
app.use(express.static(path.join(__dirname, "public")));

// sets the view engine we are to use to render our templates
app.set("view engine", "ejs");

// routes to our homepage
app.get("/", routes.home);

// route to individual movies in our home page
app.get("/star_wars_episode/:espisode_number?", routes.single_movie);

// any route that doesn't match the routes defined above will return a 404
app.get("*", routes.page_404);

// declares the port where our app will be running on
app.listen(3001);
