const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.personal=function(req,res){
    task.find({'category':'Personal'},function(err,task){
        if(err){
            console.log(`Error ${err}`);
        }
        return res.render('categoryPage',{
            title:'Personal Category',
            heading:'Personal Contacts',
            tasks:task
        })
    })
}

module.exports.work=function(req,res){
    task.find({'category':'Work'},function(err,task){
        if(err){
            console.log(`Error ${err}`);
        }
        return res.render('categoryPage',{
            title:'Work Category',
            heading:'Work Contacts',
            tasks:task
        })
    })
}

module.exports.school=function(req,res){
    task.find({'category':'School'},function(err,task){
        if(err){
            console.log(`Error ${err}`);
        }
        return res.render('categoryPage',{
            title:'School Category',
            heading:'School Contacts',
            tasks:task
        })
    })
}

module.exports.cleaning=function(req,res){
    task.find({'category':'Cleaning'},function(err,task){
        if(err){
            console.log(`Error ${err}`);
        }
        return res.render('categoryPage',{
            title:'Cleaning Category',
            heading:'Cleaning Tasks',
            tasks:task
        })
    })
}

module.exports.other=function(req,res){
    task.find({'category':'Other'},function(err,task){
        if(err){
            console.log(`Error ${err}`);
        }
        return res.render('categoryPage',{
            title:'Other Category',
            heading:'Other Contacts',
            tasks:task
        })
    })
}