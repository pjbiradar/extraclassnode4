const express=require("express")
const app=express()
const mainroute=require('./routes')

app.use('/api/v1',mainroute)
app.listen(8000,(req,res)=>{
    console.log("success");
})
