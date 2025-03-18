const teacherModel=require('../models/teacher')

exports.getallTeacher=async(req,res)=>{
    try{
            const result=await teacherModel.find({}).populate('assigned_classes').exec()
            res.send({result})
    }
    catch(err){
        console.log(err)
    }
}