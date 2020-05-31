const express=require('express');
const router=express.Router();
const flaggedTasksController=require('../controllers/flaggedTasksController');

router.get('/flaggedTasks',flaggedTasksController.flag);
module.exports=router;