const express = require('express');
const movies = require('./routes/movies');
const middleware = require('./middleware/authorizer');

// // 1. Import the express-openapi-validator library
// const OpenApiValidator = require('express-openapi-validator');

// // 2. Set up body parsers for the request body types you expect
// //    Must be specified prior to endpoints in 5.
// app.use(express.json());
// app.use(express.text());
// app.use(express.urlencoded({ extended: false }));

const port = 3000;
const app = express();

app.use(middleware.authenticate);
app.use('/movies', middleware.authenticate, movies);








// start server
app.listen(port, () => console.log(`Server is now listening on port ${port}`));