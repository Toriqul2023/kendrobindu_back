const classModel = require('../models/class');

// Create a new class
exports.createClass = async (req, res) => {
  const { class_name, group} = req.body;
  try{
    const Class=new classModel({class_name,group})
    const result=await Class.save()
    res.send({result})
  }
  catch(err){
  console.log(err)
  }
  
};

exports.getClass=async(req,res)=>{
  try{
    const result=await classModel.find({}).populate('subjects')
    res.send({result})
  }
  catch(err){
    console.log(err)
  }
}
exports.updateClass=async(req,res)=>{
  try{
    const {id}=req.params
    const query={_id:id}
    const {studentId}=req.body
    const updateDoc = {
      $push: {
        subjects: studentId,
      },
    };
    const result=await classModel.updateOne(query,updateDoc)
    res.send({result})
  }
  catch(err){
  console.log(err)
  }
}
