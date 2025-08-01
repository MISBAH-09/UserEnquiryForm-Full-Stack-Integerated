let express=require('express');
let mongoose=require('mongoose');
require('dotenv').config();

let app=express();

app.use(express.json());
mongoose.connect(process.env.DBUrl).then(()=>{
    console.log("Data base has been connected")
    app.listen(process.env.PORT||"8000",()=>{
        console.log('Server is listening on port :',process.env.PORT);
    })
}).catch((err)=>{
    console.log("Data base has been connected",err)
})

// app.listen("8000")