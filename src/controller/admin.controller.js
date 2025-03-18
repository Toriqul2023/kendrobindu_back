const teacherModel=require('../models/teacher')

exports.assignClasstoTeacher=async(req,res)=>{
    try{
        const {id}=req.params
        const {classId}=req.body
        const query={_id:id}

      
        const teacher = await teacherModel.findById(id);
        if (!teacher) {
            return res.status(404).send({ message: 'Teacher not found' });
        }
        
        const updatedDoc={
            $push:{
                assigned_classes:classId 
            }
        }
        const result=await teacherModel.updateOne(query,updatedDoc)
        res.send({result});
    }
    catch(err){
        console.log(err)
    }
}