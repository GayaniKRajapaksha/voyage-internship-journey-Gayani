

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
const fileRoutes = require('./routes/fileRoutes');
const emailRoutes = require('./routes/emailRoutes');
const exportRoutes = require('./routes/exportRoutes');

app.use('/api/files', fileRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/export', exportRoutes);

// Catch-all for frontend (avoid PathError)
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
