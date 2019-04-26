const http = require('http')
const host = '127.0.0.1'
const port =  '3000'

var server = http.createServer((req,res)=>{

    res.end("<h1>Olá Mundo cruel</h1>")

}).listen(port,host,()=>{

    console.log('servidor está rodando em http://'+ host + ':' + port)
})