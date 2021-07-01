const http=require('http');
        const fs = require("fs");
        const server=http.createServer(function(req,res){
        fs.readFile(__dirname + "/buffer.js", "utf8", (err, data) => {
        res.writeHead(200,{"content-type":"text/html"});
            if (err) throw err
            res.write("<font size=4 color=red>")
            res.write(data);  
            res.write("<font>")
       res.end();
       });
}).listen(3000,()=>console.log("server created"));