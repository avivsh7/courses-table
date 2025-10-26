const courseService = require('../Services/courseService');

// POST - Upload csv file to db
async function uploadCSV(req, res) {
  try {
    const result = await courseService.saveCoursesFromCSV(req.file.path);
    res.json({ message: 'CSV uploaded and data saved!', result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save data', details: err.message });
  }
}

// GET - Gets all courses
async function getAllCourses(req, res) {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses', details: err.message });
  }
}

module.exports = {
  uploadCSV,
  getAllCourses,
};
