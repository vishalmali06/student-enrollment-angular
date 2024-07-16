// routes/courseRoutes.js
const express = require('express');
const { getAllCourses, addCourse, deleteCourse, updateCourse, getCourse} = require('../controllers/courseController');
const router = express.Router();

router.get('/', getAllCourses);
router.post('/', addCourse);
router.delete('/deleteCourse/:courseCode', deleteCourse);
router.put('/updateCourse/:courseCode', updateCourse);
router.get('/:courseCode', getCourse);  // Add this line

module.exports = router;
