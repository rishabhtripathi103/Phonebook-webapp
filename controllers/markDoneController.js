const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.done=function(req,res){
    var id=req.query.id;
    currentTask=task.findByIdAndUpdate(id, { isDone: 'true' },function(err){
        if(err){
            console.log(`Error ${err} while deleteing the record`);
            return;
        }

        res.redirect('back');
    });
}

