var express = require('express')
var bodyParser = require('body-parser')

var router = express.Router()

//middleware para ser usado em todas as rotas
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('usamos o express router')
})

module.exports = router