const router = require('express').Router();
const moviesService = require('../functions/movies');


// router.get('/', );


router.get('/movies', moviesService.getAllMovies);

module.exports = router;