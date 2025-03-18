
const teacherModel = require('../models/teacher');

// Register a teacher
exports.registerTeacher = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {


    const Teacher = new teacherModel({
      name,
      email,
      phone,
      password,
    });

   const result= await Teacher.save();
    res.send({result});
  } catch (error) {
    res.send({ message: 'Error registering teacher', error });
  }
};
