var rotas = require('./routes')
var app = require('express')()

app.use('/testederotas',rotas)

app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000');
    
})