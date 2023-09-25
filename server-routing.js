const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const carRoutes = require("./routes/carRoutes");
const carModels = require ("./models/car_models");
const app = express();
const port = 5001;


///mongoose connection to database
mongoose.connect("mongodb://127.0.0.1:27017/carDatabase")

//bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/cars",carRoutes)


app.get('/',(req,res)=>{
    res.send("Hello World from Mongoose integration API")
});

app.listen(port,()=>{
    console.log("port started successfully on:",port)
});

