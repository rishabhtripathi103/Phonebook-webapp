const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.list=function(req,res){
   
    task.find({},function(err,task){
        if(err){
            console.log("error has occurred while retreiving data",err);
            return;
        }
        return res.render('list',{
            title:"Tasks",
            tasks:task
            // 'task' being the collection passed in 'tasks' to tasks.ejs
        });

    });

    
} 