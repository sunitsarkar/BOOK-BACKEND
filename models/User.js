const mongoose=require('mongoose');

const USER=mongoose.Schema({
    username:String,
    password:String
})

module.exports=mongoose.model('USER',USER)