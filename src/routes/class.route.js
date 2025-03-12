const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Create a new class
router.post('/create', classController.createClass);

// Get all classes
router.get('/', classController.getClasses);

// Get a specific class by ID
router.get('/:class_id', classController.getClassById);

// Update class details (e.g., subjects and group)
router.put('/:class_id', classController.updateClass);

// Delete a class
router.delete('/:class_id', classController.deleteClass);

module.exports = router;
