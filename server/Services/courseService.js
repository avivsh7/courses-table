// courseService.js
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const AppDataSource = require('../db');

async function saveCoursesFromCSV(filePath) {
  return new Promise((resolve, reject) => {
    const courses = [];
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true, trim: true }))
      .on('data', (row) => {
        courses.push({
          chapter: row['Chapter'] || '',
          lesson_name: row['Lesson Name'] || '',
          type: row['Type'] || '',
          content: row['Content'] || '',
          lesson_points: row['Lesson Points'] || '',
          status: row['Status'] || 'Draft',
        });
      })
      .on('end', async () => {
        try {
          const repo = AppDataSource.getRepository('Course');
          await repo.save(courses);
          fs.unlinkSync(filePath);
          resolve({ count: courses.length });
        } catch (err) {
          reject(err);
        }
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

async function getAllCourses() {
  const repo = AppDataSource.getRepository('Course');
  return repo.find();
}

module.exports = {
  saveCoursesFromCSV,
  getAllCourses,
};
