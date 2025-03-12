const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subject_name: { type: String, required: true },
  applicable_classes: [{ type: String }], // Example: ["5", "6", "9-Science"]
});

module.exports = mongoose.model('Subject', subjectSchema);
