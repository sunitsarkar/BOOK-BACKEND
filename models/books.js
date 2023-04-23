const mongoose=require('mongoose');

const BOOKS=mongoose.Schema({
    title:String,
    ISBN:String,
    author:String,
    descriptin:String,
    publish:String,
    publisher:String

})

module.exports=mongoose.model('BOOKS',BOOKS);