// Import mysql module
let mysql = require('mysql');
require("dotenv").config();

// Setup database connection parameter
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASS
});
// Connect with the database
connection.connect(function(e) {
  if (e) {

    // Show error messaage on failure
    return console.error('error: ' + e.message);
  }

  // Show success message if connected
  console.log('\nConnected to the MySQL server...\n');
  connection.query("CREATE DATABASE Newdatabase", (e, r) => {
    if (e) {
      console.log(e);
    }
    console.log("database created");
  });
});
