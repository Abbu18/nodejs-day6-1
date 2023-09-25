const express = require ("express");

const carRouter = express.Router();

const carModels = require ("../models/car_models")


//create end points
carRouter.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body,(err,dbresponse)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Car details added Successfully")
        }
    })
})


//Read end points
carRouter.get('/getCarDetails',(req,res)=>{
    carModels.find((err,results)=>{
        if(err){
            console.log(err.message)
        }
        else{
            res.send(results)
        }
    })
})

//update end points
carRouter.put('/updateCarDetails',(req,res)=>{
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
})

//update end points
carRouter.delete('/deleteCarDetails',(req,res)=>{
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
})

module.exports = carRouter;
