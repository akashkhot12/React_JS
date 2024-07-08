const express = require("express");
const app = express();
const cors = require('cors');
const connection = require('./connection')

app.use(cors());


app.get('/',(req,res)=>{
    res.send("hellow")
})

app.listen(3000,()=>{
    console.log("server is up on 3000");
})