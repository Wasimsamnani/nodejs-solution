const express = require('express');
const app=express();
app.get("/",(req,res)=>res.send("<h1> <u>hey</u> </h1>"));
app.get("/about",(req,res)=>res.send("welcome to my about page"));
app.get("/contact",(req,res)=>{
  res.send({
    id:1,
    name:"wasim"
  })
});
app.listen(8000);
