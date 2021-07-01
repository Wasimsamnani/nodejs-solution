const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" })
    function fun1(rno, name) {
        res.write("<h1><b><i><font color='red'>");
        res.write("rno no=" + rno);
        res.write("<br>");
        
        res.write("student name=" + name);
        res.write("</font></i></b></h1>");
    }

    fun1(134, "ram");
    res.end();
}).listen(8080);