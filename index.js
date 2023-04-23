const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const router = require('./router/router');

const dbUrl="mongodb+srv://sunitsarkar:LwP8bgRq3VOKlHWI@cluster0.gxschpx.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery'  ,false);
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('conneted to datebase')
});


app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/',router)

app.listen(8000,()=>{
    console.log('app is running on localhost 8000')
});