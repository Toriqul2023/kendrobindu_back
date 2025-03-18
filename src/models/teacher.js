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
  subjects_taught:[ {
    
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subject',  // Referencing the Subject model
   
    
  }],
  assigned_classes:[{
    
      type: mongoose.Schema.Types.ObjectId,
      ref: 'class',  // Referencing the Class model
   
    default: [],
  }],
}, { timestamps: true });

// Model
const Teacher = mongoose.models.teacher || mongoose.model('teacher', teacherSchema);

module.exports = Teacher;
