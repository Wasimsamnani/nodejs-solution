const http=require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
fs.readFile("core1.js","utf8",(err,data)=>{
	res.writeHead(200,{"content-type":"text/html"});
	if (err)throw err;
	else {
		res.write(data);
		console.warn("application is reading the file");
		res.end();
	}
	});
}).listen(3000,()=>console.log("server created sucessfully"));
