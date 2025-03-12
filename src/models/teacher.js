const mongoose = require('mongoose');

// Teacher Schema
const teacherSchema = new mongoose.Schema({
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
    default: 'teacher',
  },
  subjects_taught: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',  // Referencing the Subject model
    }],
    required: true,
  },
  assigned_classes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',  // Referencing the Class model
    }],
    default: [],
  },
}, { timestamps: true });

// Model
const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
