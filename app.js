// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const jobPostingRoutes = require('./routes/jobPostingRoutes');
const candidateRoutes = require('./routes/candidateRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const shortlistingRoutes = require('./routes/shortlistingRoutes');
const interviewScheduleRoutes = require('./routes/interviewScheduleRoutes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Allowed origins
const allowedOrigins = [
  'http://localhost:3000', // Localhost for development
  process.env.FRONTEND_URL || 'https://r-portal-two.vercel.app', // Vercel frontend URL
];

// CORS Middleware setup
app.use(cors({
  origin: (origin, callback) => {
    console.log('Origin:', origin); // Log the incoming origin
    if (!origin) return callback(null, true); // Allow requests with no origin

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true); // Allow the origin
  },
  credentials: true, // Allow credentials
}));

// Middleware
app.use(express.json());

// Routes setup
app.use('/api/jobs', jobPostingRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/shortlisting', shortlistingRoutes);
app.use('/api/interviews', interviewScheduleRoutes);

// Error handling middleware
app.use(errorHandler);

// Default route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
