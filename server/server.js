require('dotenv').config();

const express=require('express');
const app=express();

const mongoose=require('mongoose');

const todoRoutes=require('./routes/route');

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/info',todoRoutes);




//connected to database
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database");

    //listen to port

    app.listen(process.env.PORT,()=>{
        console.log("listening on port number ",process.env.PORT);
    })
}).catch(error=>{
    console.log(error);
})
