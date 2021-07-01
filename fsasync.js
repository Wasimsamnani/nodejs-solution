const fs = require('fs');
fs.writeFile('read.txt',"today is awsome day day day day",(err)=>{
  if (err)
  throw err
})
fs.appendFile("read.txt"," my chennel", (err)=>err?err:null)
fs.readFile("read.txt","utf-8",(err,data)=>{err?err:console.log(data)})
