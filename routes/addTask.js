const express=require('express');
const router=express.Router();
const addTaskController=require('../controllers/addTaskController');
router.post('/addTask',addTaskController.newList);
module.exports=router;