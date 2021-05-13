import { v4 as uuidv4 } from 'uuid';
var express = require("express");
var router = express.Router();

let movieList = [
  {
    id: "10002",
    name: "die hard",
    year: "1999",
    genre: "action",
    income: "10000000",
  },
  {
    id: "10003",
    name: "titanic",
    year: "1997",
    genre: "romantic",
    income: "10000000",
  },
];


/* GET home page. */
router.get("/movies/", function (req, res, next) {
/*   let newArray = JSON.parse(JSON.stringify(movieList));
  let list = newArray.reverse().filter((o, i) => i < 20); */
  res.status(200).json(movieList);
});

router.get("/movies/:id", function (req, res, next) {
 /*  let newArray = JSON.parse(JSON.stringify(movieList));
  let list = newArray.find((o, i) => i == req.params.id);
  res.json(list);
  console.log(list); */
  var id = req-prams.id;
});

router.post("/movies/", function (req, res, next) {
  movieList.push(req.body);
  res.sendStatus(200);
});

router.put("/movies/:id", function (req, res, next) {
  /* let movies = req.movies;
  movies = _.extend(movies, req.body); */
 /*  movies.save(function (err) {
    if (err) {
      return res.send("/movies/:id", {
        errors: err.errors,
        movies: movies,
      });
    } else {
      res.jsonp(movies);
    }
  }); */
  var id = req.params.id;
  var getId = req.query.id;
  var postId = req.body.id;
});

router.delete("movies/:id", function (req, res, next) {
  //let deletMovies = movieList["movies" + req.params.id]
  let newMovieList = JSON.stringify(movies, null, 1);
  console.log(newMovieList);
});

router.get("/rents", function (req, res, next) {});

router.post("/rents", function (req, res, post) {
  let rentedMovie = req.body;
  uuidv4();
  movieList.push(movieList);
  res.status(200).jsonp(rentedMovie);
  console.log(rents);
});

ServiceWorkerRegistration.listen(3000, ()=>{
  console.log('http://localhost:3000')
})

module.exports = router;
