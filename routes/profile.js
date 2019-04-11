const route = require('express').Router()

route.get('/',(req,res)=> res.send("You've reached somewhere!!!"))

exports=module.exports= route