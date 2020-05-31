const express=require('express');
const router=express.Router();
const listController=require('../controllers/list_Controller');
router.use('/list',listController.list);
module.exports=router;