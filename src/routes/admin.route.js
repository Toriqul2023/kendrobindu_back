const express=require('express')
const router=express.Router()
const adminController=require('../controller/admin.controller')

router.put('/teacherclassassign/:id',adminController.assignClasstoTeacher)

module.exports=router
