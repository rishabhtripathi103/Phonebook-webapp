const express=require('express');
const router=express.Router();
const categoryController=require('../controllers/categoryController');

router.get('/category/personal',categoryController.personal);
router.get('/category/work',categoryController.work);
router.get('/category/school',categoryController.school);
router.get('/category/cleaning',categoryController.cleaning);
router.get('/category/other',categoryController.other);
module.exports=router;
