const app = require('./config/express')

app.get('/',(req,res)=>{
    res.send('Boa tarde Node JS')
})

app.listen(process.env.PORT,()=>{
    console.log('the server is running on port 3000!');
    
})