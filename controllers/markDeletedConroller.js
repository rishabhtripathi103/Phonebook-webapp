const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.deleted=function(req,res){
    let id=req.query.id;
    currentTask=task.findByIdAndDelete(id,function(err){
        if(err){
            console.log(`Error ${err} while deleteing the record`);
            return;
        }

        res.redirect('back');
    });
}

