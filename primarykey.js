const mysql = require('mysql');
require("dotenv").config();
var con = mysql.createConnection({
  host:"localhost",
  database:"newdatabase",
  user:"root",
  password:process.env.PASS
});

    con.connect((err) => {
      if (err) throw err;
      console.log("connected");
        var q = "CREATE TABLE Customerm (cid int primary key,cname VARCHAR(20),address VARCHAR(225))";
      // con.query(q,(err,r) => {
      //   if (err) throw err;
      //   console.log(r);
      // });
      var q2 = "CREATE TABLE orders1 (id INT PRIMARY KEY,foreign key(id) references Customerm(cid),orderTotal DECIMAL(9,2))";
      con.query(q2,(err) => {
        if (err) throw err;
        console.log("done with foreing key");
      });
      let array = [[101,'wasim','pune'],[102,'aryan','pune']];
      var ql = "insert into student values ?";
      con.query(ql,[array],(err,r) => {
        if (err) throw err;
        console.log(r.affectedRows);
      });
  });
