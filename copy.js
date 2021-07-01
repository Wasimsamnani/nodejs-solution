var http=require('http');
let sub="hello world";
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(sub.toUpperCase());
    res.end();
}).listen(5500,() => {
  console.log("connected");
});
