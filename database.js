const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
  host:"localhost",
  database:"Productsinfo",
  user:"root",
  password:process.env.PASS
})

  con.connect((err) => {
    if(err) throw err;
    console.log("connected");
    let array = [
      [101,'wasim',12,1200],
      [102,'aryan',13,1500],
      [103,'ram',14,1200],
      [104,'kam',19,9000],
      [105,'shyam',20,400]
    ]
    let q = "insert into Product values ?";
    con.query(q,[array],(err,r) => {
      if (err) throw err;
      console.log(r.affectedRows);
    })
  });
  // con.query("create database Productsinfo",(err,r) => {
  //   if (err) throw err;
  //   console.log(r);
  // });

//   con.query("create table Product(pid int primary key,pname varchar(20),quantity int,price int)",(err,r) => {
//     if (err) {
//       throw err;
//     }
//     else {
//       console.log(r);
//     }
// })
