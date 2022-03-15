const express=require("express")

const article=require('../routes/article')
const user=require('../routes/user')


const mainroute=express.Router()

mainroute.use('/articles',article)
mainroute.use('/users',user)

module.exports=mainroute;
