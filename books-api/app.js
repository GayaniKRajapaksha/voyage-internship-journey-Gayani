const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const booksRouter = require('./routes/books');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => res.send('📚 Books API'));

// Books routes
app.use('/api/books', booksRouter);

// Swagger docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('💥 Unhandled error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception:', err.stack);
  process.exit(1); // optional: restart server after crash
});

module.exports = app;
