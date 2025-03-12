const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');

// Admin assigns subjects to a teacher
router.post('/assign-subjects', adminController.assignSubjectsToTeacher);

// Admin assigns classes to a teacher
router.post('/assign-classes', adminController.assignClassesToTeacher);

// Admin can get all teachers
router.get('/teachers', adminController.getAllTeachers);

// Admin can get a specific teacher by ID
router.get('/teacher/:teacher_id', adminController.getTeacherById);

// Admin updates a teacher's subjects and classes
router.put('/update-teacher/:teacher_id', adminController.updateTeacher);

// Admin deletes a teacher
router.delete('/delete-teacher/:teacher_id', adminController.deleteTeacher);

// Admin creates a new class
router.post('/create-class', adminController.createClass);

// Admin gets all classes
router.get('/classes', adminController.getClasses);

// Admin gets a specific class by ID
router.get('/class/:class_id', adminController.getClassById);

// Admin updates class details (e.g., subjects, group)
router.put('/update-class/:class_id', adminController.updateClass);

// Admin deletes a class
router.delete('/delete-class/:class_id', adminController.deleteClass);

// Admin creates a new subject
router.post('/create-subject', adminController.createSubject);

// Admin gets all subjects
router.get('/subjects', adminController.getSubjects);

// Admin gets a specific subject by ID
router.get('/subject/:subject_id', adminController.getSubjectById);

// Admin updates a subject
router.put('/update-subject/:subject_id', adminController.updateSubject);

// Admin deletes a subject
router.delete('/delete-subject/:subject_id', adminController.deleteSubject);

module.exports = router;
