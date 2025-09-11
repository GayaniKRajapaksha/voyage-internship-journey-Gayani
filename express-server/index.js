const express = require('express');
const cors = require('cors');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
