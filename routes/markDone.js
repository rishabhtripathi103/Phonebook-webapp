const express=require('express');
const router=express.Router();
const markDoneController=require('../controllers/markDoneController');

router.get('/markDone',markDoneController.done);
module.exports=router;


