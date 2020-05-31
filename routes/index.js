const express=require('express');
const router=express.Router();

const home_Controller=require('../controllers/home_Controller')
router.get('/',home_Controller.home);
router.get('/list',require('./list'));
router.post('/addTask',require('./addTask'));
router.get('/markDeleted',require('./markDeleted'));
router.get('/markDone',require('./markDone'));
router.get('/markFlagged',require('./markFlagged'));
router.get('/doneTasks',require('./doneTasks'));
router.get('/flaggedTasks',require('./flaggedTasks'));
//category

router.get('/category/personal',require('./categoryRouter'));
router.get('/category/work',require('./categoryRouter'));
router.get('/category/school',require('./categoryRouter'));
router.get('/category/cleaning',require('./categoryRouter'));
router.get('/category/other',require('./categoryRouter'));

module.exports=router;
