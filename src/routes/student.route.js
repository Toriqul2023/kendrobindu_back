const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Student registration
router.post('/register', studentController.registerStudent);

// Student views their enrolled class and subjects
router.get('/:student_id', studentController.getStudent);

// Student views their assigned subjects based on their class
router.get('/:student_id/subjects', studentController.getStudentSubjects);

module.exports = router;
