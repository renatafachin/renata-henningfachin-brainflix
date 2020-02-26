// include express in order to use methods like .Router()
const express = require('express');
// reference to the books file in order to write using writeJSONFile
const booksFile = __dirname + '/../../models/books.json';
// work with array of data from books
const books = require(booksFile);
// helper functions: writeJSONFile & getNewId
const helper = require('../../helper/helper');
// setup express router
const router = express.Router();

/**
 * Get all the books but with fewer properties/keys
 */
router.get('/', (req, res) => {
  const bookList = books.map(book => {
    return {
      id: book.id,
      title: book.title,
      imageUrl: book.imageUrl
    };
  });
  res.json(bookList);
});

/**
 * Get book by id
 */
router.get('/:id', (req, res) => {
  const found = books.some(book => book.id === req.params.id);
  if (found) {
    res.json(books.filter(book => book.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Book with ID:${req.params.id} not found` });
  }
});

/**
 * Post new book
 */
router.post('/', (req, res) => {
  const newBook = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    comments: []
  };
  if (!newBook.title || !newBook.description || !newBook.imageUrl) {
    return res.status(400).json({
      errorMessage:
        'Please provide title, description, and imageUrl for the book'
    });
  }
  books.push(newBook);
  helper.writeJSONFile(booksFile, books);
  res.json(books);
});

/**
 *  update book with :id
 */
router.put('/:id', (req, res) => {
  const found = books.some(book => book.id === req.params.id);
  if (found) {
    books.forEach(book => {
      if (book.id === req.params.id) {
        book.title = req.body.title ? req.body.title : book.title;
        book.description = req.body.description
          ? req.body.description
          : book.description;
        book.imageUrl = req.body.imageUrl ? req.body.imageUrl : book.imageUrl;
      }
    });
    helper.writeJSONFile(booksFile, books);
    res.json({ msg: 'Book Updated', books: books });
  } else {
    res
      .status(404)
      .json({ errorMessage: `Book with ID: ${req.params.id} not found` });
  }
});

/**
 * Delete Book
 */
router.delete('/:id', (req, res) => {
  const found = books.some(book => book.id === req.params.id);
  if (found) {
    const booksAfterDeletion = books.filter(book => book.id !== req.params.id);
    helper.writeJSONFile(booksFile, booksAfterDeletion);
    res.json({
      msg: `Book with ID: ${req.params.id} Deleted`,
      books: booksAfterDeletion
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: `Book with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
