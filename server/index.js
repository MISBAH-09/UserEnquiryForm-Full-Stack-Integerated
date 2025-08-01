let express=require('express');
let mongoose=require('mongoose');
const enquiryRoutes = require('./App/routes/web/enquiryroutes');
require('dotenv').config();
let app=express();

app.use(express.json());
app.use('/api/website/enquiry',enquiryRoutes)

mongoose.connect(process.env.DBUrl).then(()=>{
    console.log("Data base has been connected")
    app.listen("8000",()=>{
        console.log('Server is listening on port :',process.env.PORT);
    })
}).catch((err)=>{
    console.log("Data base has been connected",err)
})

// app.listen("8000")