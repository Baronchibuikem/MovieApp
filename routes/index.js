// we are fetching our data from a json file name movies.json in our project folder
const moviesJson = require("../movies.json");

// this will render all the objects in the movies.json file
exports.home = function(req, res) {
  const movies = moviesJson.movies;

  res.render("home", {
    title: "Star wars movies",
    movies: movies
  });
};

// route for single page view
exports.single_movie = function(req, res) {
  const movies = moviesJson.movies;
  let espisode_number = req.params.espisode_number;

  // if the number of episode_number in our json object is >=1 and <=6
  if (espisode_number >= 1 && espisode_number <= 6) {
    // we fetch the movies episode_number but because of indexing, we substract 1
    const movie = movies[espisode_number - 1];
    const title = movie.title;
    const main_characters = movie.main_characters;
    res.render("single_movie", {
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters
    });
  } else {
    // if the episode number is greater than 6 or less than 1, we return our 404 page
    res.render("404page", {
      movies: movies,
      title: "This is not the page you are looking for"
    });
  }
};

// this returns a 404page
exports.page_404 = function(req, res) {
  res.render("404page");
};
