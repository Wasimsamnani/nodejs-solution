var fs=require("fs")
let file=fs.readFileSync(__dirname+"/demo1.txt","utf8");
let search=file.indexOf("t",0)
console.log(file.toString());
console.log(search);
if(search>0){
	console.log(`wrold is present  ${search} times`);
}
else{
	console.log("world is not present");
}
