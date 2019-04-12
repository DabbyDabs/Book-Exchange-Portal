const express = require('express')
const app= express()
const bookDb= require('./bookDb');
const hbs= require('hbs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')
app.use(express.static('images')); 
app.use(express.static('public'))
app.use('/profile', require('./routes/profile'));
app.use('/',require('./routes/root'));

// app.get('/collection',(req, res )=>{                
//            res.render('books',{
//             collections: [{name:"Jaggi Mathur", edition:"second",semester:1,roll:"34234"},
//             {name:"Jaggi Mathur",edition:"second",semester:2,roll:"34234"},
//             {name:"Jaggi Mathur",edition:"second",semester:3,roll:"34234"}]
//         })
// })

app.get('/collection',(req, res )=>{                   //this is when we fetch data from the database
    bookDb.getAllBooks().then((collections)=>{    
        res.render('books',{collections})
    }).catch((err)=>{
        res.send(err);
})
})


app.listen(2222,()=> console.log('server running on http://localhost:2222'))