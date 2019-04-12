const route = require('express').Router()
const Sequelize= require('sequelize')
const Users= require('../db').Users;


route.get('/login',(req,res)=>
res.render('login') )
route.get('/signup',(req,res)=> 
res.render('signup'))
route.post('/login',(req,res)=>{
    Users.findOne({
        where: {
            username: req.body.username
        }
    }).then ((user) => {
        if(!user) {
            return res.send('No such user')
        }
        if(user.password !=req.body.password){
            return res.send("Wrong password")
        }
        return res.render('profile')
    })
} )
route.post('/signup',(req,res)=>
   Users.create({
      username: req.body.username,
      password: req.body.password,
        name: req.body.name,
      email: req.body.email,
      section: req.body.section,
      roll: req.body.roll

   }).then((createdUser)=>{
       res.redirect('/login')
   }) )


   route.get('/books', (req,res)=>
   res.render('books'))

exports = module.exports = route