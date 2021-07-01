//importing all modules
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
require('dotenv').config();
var app = express();
app.use(bodyParser.urlencoded({extended:true}))

var mysql = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
})

//sending the form to webbrowser
  app.get('/',(req,res) => {
    res.sendFile(__dirname+"/form.html");
  });

//getting the data from form and storing that data

  app.post('/myaction',(req,res) => {
    console.log(req.body);
    var {textid,textname,textaddress}=req.body;
    if (!textid || !textname || !textaddress){
      res.write("enter all the filds");
      res.end();
    }
    else{
    res.write(`your id  ${textid}`);
    res.write(`your name  ${textname}`);
    res.write(`your address  ${textaddress}`);
    res.end();

    mysql.connect((err) => {
      if (err) throw err;
      console.log("connected");
    mysql.query("insert into customer values('"+textid+"','"+textname+"','"+textaddress+"')",
    (err,r) => {
      if (err) throw err;
      console.log("data saved");
        });
      });
    }

  });
  app.listen(3000);
  console.log("app running at 3000");
