var express = require('express')
var app = express();
console.log(express);
// to listen to the port we can directly use this line
var http = require('http').Server(app).listen(8080);

var upload = require('express-fileupload');
app.use(upload()); // upload function inside express

console.log('Server Started');

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res) {
  if (req.files) {
    var file = req.files.filename;
    var filename = file.name;
    file.mv("./upload/" + filename, function(err) {
      if (err) {
        console.log(err);
        return res.end("Error Occurred")
      } else
        res.end("File Uploaded Successfully")
        console.log("file upload sucessfully");
    })
  }
})
