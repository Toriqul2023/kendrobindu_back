const express=require('express')
const router=express.Router()

const teacherRegController=require('../controller/teacherRegistrationController')
const teacherController=require('../controller/teacher.controller')

router.post('/create',teacherRegController.registerTeacher)
router.get('/get',teacherController.getallTeacher)

module.exports=router