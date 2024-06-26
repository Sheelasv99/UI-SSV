require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require("mongoose");
const path = require('path');

const userRoutes =require('./server/routes/user');
const bookingRoutes =require('./server/routes/booking');

mongoose.connect(process.env.dbURL)
    .then(console.log("DB Connected!"))
    .catch(error => console.log(error));

app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.get('/',(req,res) =>res.sendFile(path.join(__dirname,'/public','index.html')));


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS")
    next();
});

app.use('/user',userRoutes);
app.use('/booking',bookingRoutes);
app.use('/feedback',feedbackRoutes);

const PORT =process.env.PORT || 3000;
app.listen(PORT,() => console.log('Server started on port ' +PORT));