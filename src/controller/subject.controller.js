const Subject = require('../models/subjects');

// Create a new subject
exports.createSubject = async (req, res) => {
  const { name, applicable_classes } = req.body;

  // Create subject logic...
};

// Update subject
exports.updateSubject = async (req, res) => {
  const { subject_id } = req.params;

  // Update subject logic...
};