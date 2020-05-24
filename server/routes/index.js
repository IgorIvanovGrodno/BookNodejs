/**
 * Import express.
 */
const express = require('express');
/**
 * Import bookController.
 * @type {{getAllLanguagesAndBooks(*, *): void, getAllLanguagesAndBooksByLang(*, *): void}}
 */
const bookController = require('../controllers/bookController');

const router = express.Router();

/**
 * This router handles HTTP GET '/' and invokes bookController.getAllLanguagesAndBooks.
 */
router.get('/', bookController.getAllLanguagesAndBooks);

/**
 * This router handles HTTP GET '/select/:id' and invokes bookController.getAllLanguagesAndBooksByLang.
 */
router.get('/select/:id', bookController.getAllLanguagesAndBooksByLang);

module.exports = router;