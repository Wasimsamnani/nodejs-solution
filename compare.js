var obj = Buffer.from('wasim')
var obj1 = Buffer.from('samnani')
var obj2 = Buffer.from('bbaca');
var arr = [obj, obj1, obj2];
console.log(arr.sort(Buffer.compare).toString());
var x = Buffer.concat(arr)//use to concat the data inside the buffer itself
console.log(x.toString());
console.log(arr.toString());
console.log(Buffer.compare(obj,obj1,));
