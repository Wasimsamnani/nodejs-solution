const http = require('http');
const server = http.createServer(function (req, res) {

    res.writeHead(200, { "content-type": "text/html" })
    var collageinfo = function () {
        res.write("<font color=aqua><marquee direction=right>christ collage pune</marquee></font>");
        res.write("wasim");
        
    }
    collageinfo();
    res.end();
}).listen(8080, () => console.log("server created"));