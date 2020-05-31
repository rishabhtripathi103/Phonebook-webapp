const mongoose=require('mongoose');

const todoListSchema= new mongoose.Schema({
    taskName:{
        type:String,
        required:true,
    },
    todoDate:{
        type:Date,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    flagged:{
        type:Boolean,
        default:false
    },
    isDone:{
        type:Boolean,
        default:false
    },
    category:{
        type:String,
        required:true
    }
});

const task=mongoose.model('Tasks',todoListSchema);

module.exports=task;