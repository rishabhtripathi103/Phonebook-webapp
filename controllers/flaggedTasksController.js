const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.flag=function(req,res){
    task.find({'flagged':true},function(err,task){

        if(err){
            console.log(`Error ${err} occurred while fetching flagged data`);
            return;
        }

        return res.render('flaggedTasksPage',{
            title:'Flagged Tasks',
            tasks:task
        });

    });

}