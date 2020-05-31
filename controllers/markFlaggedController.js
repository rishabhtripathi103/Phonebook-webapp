const db=require('../config/mongoose');
const task=require('../models/todoApp');

module.exports.flag=function(req,res){
    var id=req.query.id;
    currentRecord=task.findByIdAndUpdate(id,{flagged:'true'},function(err){
        if(err){
            console.log(`Error ${err} occurred while marking flagged`);
            return;
        }

        res.redirect('back');
    })
}