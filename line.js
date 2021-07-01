const fs = require('fs');
const http=require('http')
const server=http.createServer(function(req,res){


try {
    // read contents of the file
    const data = fs.readFileSync('website.html', 'UTF-8');
     
    // split the contents by new line
    const lines = data.split(/\r?\n/);
  
    // print all lines
    lines.forEach((lines) => {
        res.write(lines);
    });
   
} catch (err) {
    console.error(err);
}// JavaScript source code
res.end();
}).listen(3000,()=>console.log("server created sucessfully"))