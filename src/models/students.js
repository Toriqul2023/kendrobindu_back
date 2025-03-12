const mongoose = require('mongoose');

// Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'student',
  },
  class_enrolled: {
    type: String, // Example: "5" or "6"
    required: true,
  },
  group: {
    type: String,
    enum: ['Science', 'Commerce', 'None'], // Group selection for class 9 and 10, default for other classes
    default: 'None',
  },
  subjects: {
    type: [String], // List of subjects like ['Math', 'Science']
    default: [],
  },
}, { timestamps: true });

// Student Model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
