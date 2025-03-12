const Teacher = require('../models/teacher');
const Subject = require('../models/subjects');

// Admin assigns subjects to a teacher
exports.assignSubjectsToTeacher = async (req, res) => {
  const { teacher_id, subject_ids } = req.body;

  try {
    // Find the teacher by ID
    const teacher = await Teacher.findById(teacher_id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Find the subjects by IDs
    const subjects = await Subject.find({ '_id': { $in: subject_ids } });
    if (subjects.length === 0) {
      return res.status(404).json({ message: 'Subjects not found' });
    }

    // Assign the subjects to the teacher
    teacher.subjects_taught = subjects.map(sub => sub._id);
    await teacher.save();

    res.status(200).json({ message: 'Subjects assigned to teacher', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning subjects', error });
  }
};
