const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");



const app =express();


app.use(bodyParser.json())
app.use(cors());

// app.get('/', (req,res)=>{
//     res.send("WELCOME TO FIRST PAGE EXPRESS")
// })
// app.get('/news', (req,res)=>{
//     res.send(`<h1>news</h1>`)
// })


app.listen(5000, ()=>{
    console.log("SERVER WORK")
})


