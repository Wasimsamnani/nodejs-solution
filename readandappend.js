const http=require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
	fs.readFile("demo.txt","utf8",(err,data)=>{
	res.writeHead(200,{"content-type":"text/html"});
	if (err)throw err;
	res.write(data);
	//fs.appendFile("demo.txt",data,function(err){
	//if (err) throw err;
	//console.log("file append sucessfully");
	//});
	res.end();
	});
}).listen(3000,()=>console.log("server created sucessfully"));