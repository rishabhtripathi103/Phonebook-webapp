const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.done=function(req,res){
    task.find({'isDone':true},function(err,task){
        if(err){
            console.log(`Error ${err} in fetching all done records`);
            return;
        }
        return res.render('doneTasksPage',{
            title:'Done Tasks Page',
            tasks:task
        });
    });
};