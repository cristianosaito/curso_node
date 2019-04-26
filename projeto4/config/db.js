const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projeto4', { useNewUrlParser: true });


var db = mongoose.connection

db.on('error',console.error.bind(console,'connection error:'))

db.once('open',()=>{
    console.log('MongoDB esta conectado');
    
})

module.exports = mongoose