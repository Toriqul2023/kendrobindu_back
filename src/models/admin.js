const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        default:'admin'
    }
})
const Admin=mongoose.models.admin || mongoose.model('admin',adminSchema)
module.exports=Admin