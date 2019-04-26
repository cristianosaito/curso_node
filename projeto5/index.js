var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        console.log(msg);
        
        io.emit('message'," brother")
    })
})

http.listen(port,()=>{
    console.log("Server rodando na porta 3000");
    })