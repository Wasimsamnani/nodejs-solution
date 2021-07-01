const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
var app = express();
app.use(bodyParser.urlencoded({extended:true}))

var sql = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
})


app.get('/',(req,res) => {
  res.sendFile(__dirname+"/studentinfo.html");
});

app.post('/Delete',(req,res) => {
  let {username} = req.body;
  console.log(username);
  if(!username){
    res.write("plz enter username");
    res.end();
  }else {

    let q =`delete from customer where name=?`;
    sql.query(q,username,(err,r) => {
      if (err) {
        console.log(err);
      }
       if(r.affectedRows==0) {
        res.write("invalid name entered");
        res.end();
      }else{
        res.write("done deleting");
        res.end();
        console.log(r);
      }
      });
  }

})
app.listen(3000);
console.log("connected to port 3000");
