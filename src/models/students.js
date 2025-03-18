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

  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'student',
  },
  class_enrolled: { type: mongoose.Schema.Types.ObjectId, ref: 'class', required: true },
 
  
}, { timestamps: true });

// Student Model
const Student = mongoose.model('student', studentSchema);

module.exports = Student;
