const express = require("express");
const data=require('../controller/controller')

const article=express.Router()

article.route('/getarticle').get(data)
module.exports=article;