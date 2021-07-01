const fs=require("fs");
//fs.rename(__dirname+"/core.js",__dirname+"/core1.js",function(err)
//{
	//if(err)throw err 
//	console.log("file is being renamed");

//});
fs.unlink(__dirname+"/demo1.txt",function(err){
if(err)throw err
console.log("file deleted");
});