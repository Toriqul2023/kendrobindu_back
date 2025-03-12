const Teacher = require('../models/teacher');
const Class = require('../models/class');
const Subject = require('../models/subjects');
const Student = require('../models/student');

// Assign classes to a teacher
exports.assignClassesToTeacher = async (req, res) => {
  const { teacher_id, class_ids } = req.body;

  try {
    const teacher = await Teacher.findById(teacher_id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    const classes = await Class.find({ '_id': { $in: class_ids } });
    if (classes.length === 0) {
      return res.status(404).json({ message: 'Classes not found' });
    }

    teacher.assigned_classes = classes.map(classItem => classItem._id);
    await teacher.save();
    res.status(200).json({ message: 'Classes assigned to teacher', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning classes', error });
  }
};

// Create a new subject
exports.createSubject = async (req, res) => {
  const { subject_name } = req.body;

  try {
    const subject = new Subject({ subject_name });
    await subject.save();
    res.status(201).json({ message: 'Subject created successfully', subject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subject', error });
  }
};

// Add subject to a class
exports.addSubjectToClass = async (req, res) => {
  const { class_id, subject_id } = req.body;

  try {
    const classData = await Class.findById(class_id);
    const subject = await Subject.findById(subject_id);

    if (!classData || !subject) {
      return res.status(404).json({ message: 'Class or Subject not found' });
    }

    classData.subjects.push(subject._id);
    await classData.save();

    res.status(200).json({ message: 'Subject added to class', classData });
  } catch (error) {
    res.status(500).json({ message: 'Error adding subject to class', error });
  }
};
