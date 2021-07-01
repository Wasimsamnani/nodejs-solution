const mysql = require('mysql');
require("dotenv").config();
var con = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
})
con.connect((err) => {
  if (err) throw err;
    console.log("connected");
    var sql = "insert into student values(101,'Ram','pune')";
    con.query(sql,(err,r) => {
      if (err) throw err;
      console.log(r);
    })
})
