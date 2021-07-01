const fs = require('fs');
// fs.writeFileSync("read.txt", " welcome to wasim chenel hey");
fs.appendFileSync("read.txt"," welcome to my chenale")
fs.readFileSync("read.txt")
const buf=fs.readFileSync("read.txt")
console.log(buf.toString());
fs.renameSync("read.txt","readwrite.txt");
