const mongoose =require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true,
        unique:true
    },
    author: {
        type: String,
        required: true,
        unique:true
    },
    quantity:  {
        type: Number,
        required: true
        
    },
    deparment:{
        type: String,
        required: true  
    },
    comments:{
        type: String,
    },
}, {timestamps:true})

module.exports= mongoose.model("BookStore",bookSchema )