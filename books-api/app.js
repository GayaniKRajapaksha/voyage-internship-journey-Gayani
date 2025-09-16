const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const booksRouter = require('./routes/books');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json'); // see step 11

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Books API'));

app.use('/api/books', booksRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// centralized error handler - must be after routes
app.use(errorHandler);

module.exports = app;
