const express = require('express');
const router = express.Router();
const classController = require('../controller/class.controller');

// Create a new class
router.post('/create', classController.createClass);
router.get('/get',classController.getClass)
router.put('/update/:id',classController.updateClass)

module.exports=router


