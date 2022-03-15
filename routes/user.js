const express=require("express")
const data = require("../controller/controller")


const routee=express.Router()

routee.route('/getUser').get(data)
routee.route('/saveUser').post(data)

module.exports=routee;