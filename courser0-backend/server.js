require('dotenv').config();
const express=require("express");
const cors = require('cors');



const mongoose=require('mongoose');


const coursework=require('./routes/coureworkrouter');

const getcourse=require('./routes/getcourses');

const app=express();    
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
});



app.use('/add',coursework);

app.use('/get',getcourse);


//connect to db

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
console.log("connected")
    
//listen for requests
app.listen(process.env.PORT,()=>{
    console.log("listening on port 4000");
})

})
.catch((error)=>{
    console.log(error)
})
