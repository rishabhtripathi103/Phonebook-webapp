const express=require('express');
const router=express.Router();
const doneTasksController=require('../controllers/doneTasksController');

router.get('/doneTasks',doneTasksController.done);
module.exports=router;