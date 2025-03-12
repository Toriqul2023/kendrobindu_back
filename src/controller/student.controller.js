const Student=require('../models/students')
const Subject=require('../models/subjects')

exports.postStudent=async(req,res)=>
{
    try{
        const { name, email, phone, password, class_enrolled, group } = req.body;
        let classFilter = class_enrolled;
        if (class_enrolled === "9" || class_enrolled === "10") {
          classFilter = `${class_enrolled}-${group}`;
        }
        const subjects = await Subject.find({ applicable_classes: classFilter }).select('_id');
        const student = new Student({
            name,
            email,
            phone,
            password,
            class_enrolled,
            group,
            subjects: subjects.map(sub => sub._id)
          });
          const result=await Student.Save()
          res.send({result});
    }
   
    catch(err){
        console.log(err)
    }
}