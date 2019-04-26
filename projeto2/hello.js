const express = require('express')
const bodyParser = require('body-parser')

var app = express()

var name 
var email

//var app = require('express')()

/* app.get('/', function(req,res){
    res.send('Hello Mundo')
}) */
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send('Hello Mundo')
})

app.post('/post', (req, res, next)=>{
     name = req.body.nome
     email = req.body.email
    //console.log('nome enviado pelo cliente: '+name+ ' e-mail: ' + email)
    if (name == "cristiano") {
        next()
    }else{
        res.status(401).send('voce nao tem permissão')
    }
    
    
},function(req,res,next){
        next()
        console.log('voce vai rodar aqui');
        
}, function (req, res, next) {
        console.log(req.body);
    
        res.status(200).send('voce passou de nivel')
    })

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000');
})
