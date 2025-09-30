const express = require('express');
require('dotenv').config();
const AppDataSource = require('./db'); // Imports database config
const cors = require('cors');
const multer = require('multer');
const courseController = require('./Controllers/courseController');
const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json());

// Set up multer for file uploads
const upload = multer({ dest: 'Uploads/' });

// CSV upload endpoint
app.post('/upload', upload.single('file'), courseController.uploadCSV);

// Get all courses endpoint
app.get('/courses', courseController.getAllCourses);
  
// Initialize database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to PostgreSQL database!');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
