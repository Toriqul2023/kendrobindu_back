const express=require('express')
const router=express.Router()
const studentController=require('../controller/student.controller')

router.post('/create',studentController.createStudent)
router.get('/get',studentController.getStudents)
module.exports=router