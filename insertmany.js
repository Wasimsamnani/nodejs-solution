const mysql = require('mysql');
require('dotenv').config();

var conn = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
})

conn.connect((err) => {
  if (err) throw err;
  console.log("connected");
  let values =[
    [103,'chicha','guj'],
    [104,'kukiu','ald']
  ];
  var q = "insert into student values ?";
  conn.query(q,[values],(err,result) => {
    if (err) throw err;
    console.log(result.affectedRows);
  })
})
