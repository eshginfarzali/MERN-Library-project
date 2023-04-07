const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore =require("./models/BookModel");



const app =express();


app.use(bodyParser.json())
app.use(cors());

//mongoose connection
mongoose.connect("mongodb+srv://eshgnfrz:p6AamnHHGdAPXqpq@cluster0.ooaouuh.mongodb.net/?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology:true,
   useCreateIndex:true})
   .then(console.log("Connected to Database"))
   .catch((err)=> console.log(err))


app.post('./newbook', async (req, res)=>{
    try{
const newBook = new BookStore({
    bookName:req.body.bookName,
    author:req.body.author,
    quantity:req.body.quantity,
    deparment:req.body.deparment,
    comments:req.body.comments
})

const book = await newBook.save();
res.status(200).json



    } catch(err){
        console.log(err)
    }
})


app.listen(5000, ()=>{
    console.log("SERVER is WORK")
})


