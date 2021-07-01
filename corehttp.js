const obj = require('http');
const server = obj.createServer(function (req, res) {
    res.write("welcome bro 11111111");
    
    res.end();
}).listen(1111)
