const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacher.controller');

// Teacher registration
router.post('/register', teacherController.registerTeacher);

// Teacher views their own details
router.get('/:teacher_id', teacherController.getTeacher);

// Teacher can view assigned classes and subjects
router.get('/:teacher_id/assigned-classes', teacherController.getAssignedClasses);
router.get('/:teacher_id/assigned-subjects', teacherController.getAssignedSubjects);

module.exports = router;
