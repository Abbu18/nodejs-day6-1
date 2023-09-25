
const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const carModels = require ("./models/car_models")

const app = express();
const port = 5001;


///mongoose connection to database
mongoose.connect("mongodb://127.0.0.1:27017/carDatabase")

//bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("Hello World from Mongoose integration API")
});

//create end points
app.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body,(err,dbresponse)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Car details added Successfully")
        }
    })
});


//Read end points
app.get('/getCarDetails',(req,res)=>{
    carModels.find((err,results)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.send(results)
        }
    })
});

//update end points
app.put('/updateCarDetails',(req,res)=>{
    carModels.findOneAndUpdate(
        {_id:req.body.id},{$set:{price:req.body.price}},
        (err,dbresponse) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("car details updated successfully")
        }
    })
});

//update end points
app.delete('/deleteCarDetails',(req,res)=>{
    carModels.findOneAndDelete(
        {_id:req.body.id},
        (err,dbresponse) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("car details deleted successfully")
        }
    })
});


app.listen(port,()=>{
    console.log("port started successfully on:",port)
});

