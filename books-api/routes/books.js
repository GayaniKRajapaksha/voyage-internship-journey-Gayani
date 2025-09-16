const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/booksController');
const { bookValidationRules, validate } = require('../middleware/validators');

router.get('/', ctrl.getBooks);
router.post('/', bookValidationRules, validate, ctrl.createBook);
router.get('/:id', ctrl.getBookById);
router.put('/:id', bookValidationRules, validate, ctrl.updateBook);
router.patch('/:id', ctrl.updateBook); // optional: allow partial updates with validation tuned for patch
router.delete('/:id', ctrl.deleteBook);

module.exports = router;
