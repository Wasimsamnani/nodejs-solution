const fs = require('fs');
let r=fs.createReadStream(`${__dirname}/demo.txt`);
let w=fs.createWriteStream(`${__dirname}/demo2.txt`,{flags:'a'});
r.pipe(w)
console.log("compleated with fs module");
