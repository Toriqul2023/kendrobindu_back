const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },

 
});

const Subject=module.exports = mongoose.model('subject', subjectSchema);
module.exports=Subject
