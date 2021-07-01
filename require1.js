console.log("This is a require global variable ");
console.log("this is file second but code is imported from another file to this");
var a = require('./require')
var main = require('./demo')
console.log("this is from another file" + main.x)
console.log(a.add(20,20))

