const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();

var app = express();
app.use(bodyParser.urlencoded({extended:true}))

var sql = mysql.createConnection({
  host:'localhost',
  database:'Collagedata',
  user:"root",
  password:process.env.PASS
});

app.get('/',(req,res) => {
  res.sendFile(__dirname+"/Userinfo.html");
});

app.post("/Userinfo",(req,res) => {
  let {textid,textname,textpassword,textcpassword,textemail,textphone} = req.body;
  if (!textid || !textname || !textpassword || !textcpassword || !textemail || !textphone) {
    res.write("Please Enter all fields");
    res.end();
  }else if (textpassword!==textcpassword) {
    res.write("password doesn't match");
    res.end();
  }
    else {
    sql.connect((err) => {
      if(err) res.write(err.toString());
        console.log("connected");
        let q ="insert into Registration values('"+textid+"','"+textname+"','"+textpassword+"','"+textcpassword+"','"+textemail+"','"+textphone+"')";
        sql.query(q,(err) => {
          if(err) res.write(err.toString());
            console.log("data saved");
            res.write("data saved");
            res.end();
        })
    });
}
});
app.listen(3000);
console.log("app running 3000");
