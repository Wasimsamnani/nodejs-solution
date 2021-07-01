const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
var app = express();

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

var sql = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
})

app.get('/',(req,res) => {
  res.sendFile(__dirname+"/studentinfo.html");
});

app.post('/Store',(req,res) => {
  console.log(req.body);
  let {rollno,name,address,course,mobilenumber,gender,email} = req.body;
  if(!rollno || !name||!address||!course||!mobilenumber||!gender||!email){
    res.write("plz enter all fields");
    res.end();
  }else {

    let q ="insert into studentinfo values('"+rollno+"','"+name+"','"+address+"','"+course+"','"+mobilenumber+"','"+gender+"','"+email+"')";
    sql.query(q,(err,r) => {
      if (err) {
        res.write(err.toString())
        res.end();
      }
       else{
        res.write("done with storing data");
        res.end();
        console.log(r);
      }
      });
  }

})
app.listen(8080);
console.log("connected to port 3000");
