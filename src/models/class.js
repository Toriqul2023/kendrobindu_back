const mongoose = require('mongoose');

// Class Schema
const classSchema = new mongoose.Schema({
  class_name: {
    type: String, // Example: "5", "6", "9", "10"
    required: true,
  },
  group: {
    type: String,
    enum: ['Science', 'Commerce', 'None'], // Only used for class 9 and 10
    default: 'None',
  },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'subject', required: true }],
  enrolled_students:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student',
    default: [],
  }],
}, { timestamps: true });

// Class Model
const Class = mongoose.model('class', classSchema);

module.exports = Class;
