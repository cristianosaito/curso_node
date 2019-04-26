const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

require('dotenv').config()
require('../config/db')

app.use(cors())
app.use(bodyParser.json())


app.use('/api', require('../core/auth/auth.routes'))
app.use('/api', require('../core/user/user.routes'))

module.exports = app