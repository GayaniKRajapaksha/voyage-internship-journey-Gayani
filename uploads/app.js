require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('./config/emailConfig');

const uploadRoutes = require('./routes/upload');
const exportRoutes = require('./routes/export');
const emailRoutes = require('./routes/email');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(rateLimit);

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/export', exportRoutes);
app.use('/api/email', emailRoutes);

// Serve uploaded files securely (optional)
app.use('/files', express.static('uploads'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
