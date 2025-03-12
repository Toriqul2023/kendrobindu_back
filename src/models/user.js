const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    role: {
        type: String,
        enum: ['student', 'teacher'],
        
      },
   
})

const User =mongoose.models.users|| mongoose.model('User', userSchema);
module.exports=User