var fs= require('fs');
var buff=Buffer.alloc(18000);
console.log("going to open an existing file");
fs.open("demo.txt","r+",function(err,fd){
if(err){
	return console.log(err);
}
console.log("file opened sucessfully");
console.log("going to read the file now");
fs.read(fd,buff,0,buff.length,0,function(err,data){
if(err){
	return console.log(err)
}
console.log(data+"bytes read");
if(data>0){
	console.log(buff.slice(0,data).toString());
	console.log(data+"bytes read");
}
});
});
