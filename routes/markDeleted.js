const express=require('express');
const router=express.Router();
const markDeletedConroller=require('../controllers/markDeletedConroller');

router.get('/markDeleted',markDeletedConroller.deleted);
module.exports=router;