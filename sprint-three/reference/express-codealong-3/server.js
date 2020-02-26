const express = require("express");
// init the express app in order to use express methods
const app = express();

const cors = require('cors');

// const validatePostJSON = require('./middleware/validateJSON');
// app.use(validatePostJSON);

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

const bookRoutes = require('./routes/api/books');

// using a route, when hit this route load this file
app.use('/api/books', bookRoutes);

// app.get("/", (req, res) => {
//   res.send(`<h1>Hello from express</h1>`);
// });

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
