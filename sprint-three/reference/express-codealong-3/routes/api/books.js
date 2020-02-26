const express = require("express");

// reference to a JSON file
const booksFile = __dirname + '/../../models/books.json';
// array of data loaded from json file
const books = require(booksFile);

// helper functions
const helper = require('../../helper/helper');

// setup express router
const router = express.Router();

/**
 * Get all books as simple list
 */
// in the get command is implied /api/books from the line app.use('/api/books', bookRoutes) in server.js
router.get("/", (req, res) => {
  const bookList = books.map(book => {
    return {
      id: book.id,
      title: book.title,
      image: book.imageUrl
    }
  });
  res.send(bookList);
});
/**
 * get single book from url param :id
 */
router.get("/:id", (req, res) => {
  // to avoid possible errors check if the item exists
  const found = books.some(book => {
    return book.id === req.params.id;
  });

  if (found) {
    // res.json:
  } else {
    res.status(400).json({
      errorMessage: `Book with ID:${req.params.id} not found`
    })
  };
});

/**
 * Post a new book
 */

router.post("/", (req, res) => {
  const newBook = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    comments: []
  }
  if (!newBook.title || !newBook.description || !newBook.imageUrl) {
    return res.status(400).json({
      errorMessage: 'Please provide title, description, and imageUrl for the book'
    })
  }
  books.push(newBook);
  helper.writeJSONFile(booksFile, books);
  res.json(books);
});

module.exports = router;
