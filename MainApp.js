const express = require('express');
const Student=require("./database/models/students")
require('./database/connection');
const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());
//create a new student

app.post("/students",async(req,res)=>{
  try{
    const user= new Student(req.body)
    const result=await user.save()
    res.status(201).send(result)
  }catch(e){
    res.status(400).send(e);
  }
})


app.get("/student/:id",async(req,res)=>{
  try{
    const id=req.params.id;
      const result =await Student.findById({_id:id})
      if (!result) {
        return res.status(500).send();
      } else {
        res.status(201).send(result)
      }
  }catch(e){
    res.status(404).send(e)
  }
})

app.get("/students",async(req,res)=>{
  try {
    const result=await Student.find()
    res.status(201).send(result)
  } catch (e) {
    res.status(404).send(e)
  }
})
//update the students by their id
app.patch("/students/:id",async(req,res)=>{
  try {
    const _id=req.params.id;
    const result= await Student.findByIdAndUpdate(_id,req.body,{
      new:true
    })
    res.send(result)
  } catch (e) {
    res.status(404).send(e);
  }
})
// sare Delete request ko sambalna hai yaha

app.delete("/student/:id",async(req,res)=>{
  try {
    const _id=req.params.id;
    console.log(_id);
    const result= await Student.findByIdAndDelete(_id)
    if(!result){
    return res.status(404)
    }
    res.send(result)
  } catch (e) {
    res.status(500).send(e)
  }
})
app.listen(port,()=>{
  console.log("connected at "+port);
})
