const express = require('express')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.use(express.static('images')); 
app.use(express.static('public'))
 app.use('/profile', require('./routes/profile'));
app.use('/',require('./routes/root'));

app.listen(2222,()=> console.log('server running on http://localhost:2222'))