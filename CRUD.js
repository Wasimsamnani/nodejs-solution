const fs = require('fs');
// fs.mkdirSync("wasim");
fs.writeFileSync("wasim/bio.txt","my name is wasim samnani hey hey hey hey hey hey")
fs.appendFileSync("wasim/bio.txt"," this is new data from  apped ........")
console.log(
  fs.readFileSync("wasim/bio.txt","utf8")
);
fs.renameSync("./wasim/bio.txt","./wasim/biobio.txt")
fs.unlinkSync("./wasim/biobio.txt")
fs.rmdirSync("./wasim");
