const express=require('express');
const router=express.Router();

const markFlagged=require('../controllers/markFlaggedController');

router.get('/markFlagged',markFlagged.flag);
module.exports=router;