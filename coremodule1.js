var obj = require("./area")
var fs=require("./fs")
const http = require('http')
const ser = http.createServer(function (req, res) {
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<font size=20 color=red>good morning</font><br>")
    function display(no1, no2) {
        var r = no1 + no2;
        res.write("<font color=blue>addition:</font>" + r)
    }
    var op = obj.areacir(20)
    res.write("area of circle :"+op)
    display(10, 20);
    var file = fs.file();
    res.write(file);
    res.end()
}).listen(8888)