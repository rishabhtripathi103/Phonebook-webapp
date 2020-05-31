const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.newList=function(req,res){
    console.log(req.url);
    console.log(req.body);
    task.create({
        taskName:req.body.taskName,
        todoDate:req.body.todoDate,
        phoneno:req.body.phoneno,
        email:req.body.email,
        category:req.body.category
        

    },function(err,newTask){
        if(err){
            console.log(`Error ${err} occurred`);
            return;
        }
        // console.log("*******************",newTask)
        
        res.redirect('back');
    });
}
