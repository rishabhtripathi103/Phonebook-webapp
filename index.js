const express=require('express');
const app=express();
const port=8000;
const path=require('path');


//db
const db=require('./config/mongoose');
const tasks=require('./models/todoApp');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error ${err} occurred.`);
    }

    console.log(`Server running on port ${port}`);
})
