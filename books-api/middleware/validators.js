const { body, validationResult } = require('express-validator');

const bookValidationRules = [
  body('title').notEmpty().withMessage('Title required').isLength({ max: 200 }),
  body('author').notEmpty().withMessage('Author required'),
  body('pages').optional().isInt({ min: 1 }).withMessage('Pages must be >= 1'),
  body('isbn').optional().isISBN().withMessage('Invalid ISBN')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

module.exports = { bookValidationRules, validate };
