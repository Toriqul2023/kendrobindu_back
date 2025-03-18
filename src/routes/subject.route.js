const express=require('express')
const router=express.Router()
const subjectController=require('../controller/subject.controller')

router.post('/create',subjectController.createSubject)
router.get('/get',subjectController.getSubject)
module.exports=router