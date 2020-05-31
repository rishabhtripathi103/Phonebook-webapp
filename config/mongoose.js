const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todoApp_db', {useNewUrlParser: true});
const db=mongoose.connection;
console.log('DB Connected!');
db.on('error',console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log("Successfully connected to the DB");
  });