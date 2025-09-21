const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/booksController');

router.get('/', ctrl.getBooks);

module.exports = router;
