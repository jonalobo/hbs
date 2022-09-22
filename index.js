const express = require('express')
require('dotenv').config()

const app = express()

app.set('view engine', 'hbs');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'))

app.get('/login',(req,res)=>{
    res.render('login',{nombre:'Jonathan'})
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Servidor en línea en el puerto ${PORT}`)
})