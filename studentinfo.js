const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
var app = express();
app.use(express.json())

var sql = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
})

app.post('/signup',(req,res) => {
  console.log(req.body);
  let {rollno,name,address,course,mobilenumber,gender,email} = req.body;
  if(!rollno || !name||!address||!course||!mobilenumber||!gender||!email){
    res.send({message:"plz enter all fields"});
  }else {

    let q ="insert into studentinfo values('"+rollno+"','"+name+"','"+address+"','"+course+"','"+mobilenumber+"','"+gender+"','"+email+"')";
    sql.query(q,(err,r) => {
      if (err) {
        res.json({message:err.toString()})
        res.end();
      }
       else{
        res.send({message:"done with storing data"});
        res.end();
        console.log(r);
      }
      });
  }


})
app.get('/details',(req,res) => {
  sql.query("select * from studentinfo",(err,r) => {
    if (err) {
      res.json({message:err.toString()});
      res.end();
    }
      else{
        res.json({result:r})
      }
  })
})

app.post('/delete',(req,res) => {
  let q='delete from studentinfo where rollno=?'
  sql.query(q,[req.body.rollno],(err) => {
    if(err){
      res.send({message:err.toString()})
    }
    else {
      res.send({message:"done deleting"})
    }
  })
})

app.post('/update',(req,res) => {
  console.log(req.body);
  let {id,rollno,name,address,course,mobilenumber,gender,email} = req.body;
  if(!rollno || !name||!address||!course||!mobilenumber||!gender||!email){
    res.send({message:"plz enter all fields"});
  }else {

    let q = "update studentinfo set rollno="+rollno+",name='"+name+"',address='"+address+"',course='"+course+"',mobilenumber='"+mobilenumber+"',gender='"+gender+"',email='"+email+"' where rollno="+id+"";
    sql.query(q,(err) => {
      if (err) {
        res.send({message:err.toString()});
      }
      else{
        res.send({message:"updated"});
      }
  })
}
})
app.listen(8000);
console.log("connected to port 8000");
