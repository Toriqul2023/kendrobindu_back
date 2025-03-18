const subjectModel = require('../models/subjects');

// Create a new subject
exports.createSubject = async (req, res) => {
  const { name } = req.body;
  try{
    const Subject=new subjectModel({
      name
    })
  const result=await Subject.save()
  res.send({result})
  }
  catch(err){
    console.log(err)
  }
 
  
};
exports.getSubject=async(req,res)=>{
  try{
    const result=await subjectModel.find({})
    res.send({result})
  }
  catch(err){
    console.log(err)
  }
}

