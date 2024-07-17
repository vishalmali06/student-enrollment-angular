const Course = require('../models/Course');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('prerequisites').populate('studentsEnrolled');
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addCourse = async (req, res) => {
    console.log("Inside addCourse");
    const { courseCode, courseName, faculty, courseDuration, courseDesc, prerequisites, studentsEnrolled } = req.body;

    try {
        const course = new Course({ courseCode, courseName, faculty, courseDuration, courseDesc, prerequisites, studentsEnrolled });
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const updateCourse = async (req, res) => {
    console.log("Inside updateCourse BE : ", req.body);
    const { courseCode } = req.params;
    const { courseName, faculty, courseDuration, courseDesc, prerequisites, studentsEnrolled } = req.body;

    try {
        const course = await Course.findOneAndUpdate(
            { courseCode },
            { courseName, faculty, courseDuration, courseDesc, prerequisites, studentsEnrolled },
            { new: true }  // This option returns the updated document
        );

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllCourses,
    addCourse,
    deleteCourse,
    updateCourse
};
