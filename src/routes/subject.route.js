const express = require('express');
const router = express.Router();
const subjectController = require('../controller/subject.controller');

// Create a new subject
router.post('/create', subjectController.createSubject);

// Get all subjects
router.get('/', subjectController.getSubjects);

// Get a specific subject by ID
router.get('/:subject_id', subjectController.getSubjectById);

// Update subject details
router.put('/:subject_id', subjectController.updateSubject);

// Delete a subject
router.delete('/:subject_id', subjectController.deleteSubject);

module.exports = router;
