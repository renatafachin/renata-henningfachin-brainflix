const express = require('express');
const app = express();
require('dotenv').config();
// desctructure the variables from .env file
const { PORT, BACKEND_URL } = process.env;

// cross origin resource sharing
// const cors = require('cors');
// app.use(cors());

// express.urlencoded alows posting form data
app.use(express.urlencoded({ extended: true }));
// in order to access req.body you need to use express.json() middleware
app.use(express.json());
// serve public files e.g. index.html
app.use(express.static('public'));

// get, post, put methods for /api/books
const bookRoutes = require('./routes/api/books');
app.use('/api/books', bookRoutes);

// start the server and listen on port 5000
app.listen(PORT, () => {
  console.log(`server is running at: ${BACKEND_URL}:${PORT}`);
});
