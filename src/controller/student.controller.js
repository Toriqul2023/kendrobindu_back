const studentModel=require('../models/students')
const classModel=require('../models/class')


exports.createStudent=async(req,res)=>{
    try{
            const {name,email,phone,password,classId}=req.body
            const Student=new studentModel({
              name,email,phone,password,class_enrolled:classId
            })
            const result=await Student.save()
            res.send({result})
    }
    catch(err){
      console.log(err)
    }
}
exports.getStudents=async(req,res)=>{
  const result=await studentModel.find({}).populate({
    path:'class_enrolled',
    populate:{path:'subjects'}
  })
  res.send({result})
}