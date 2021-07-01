// method 1:
const obj = Buffer.alloc(15);
obj.write('good morning');
console.log(obj.toString());

// method 2:
const buf = Buffer.from('gungam style gangam style');
console.log(buf.toString());
console.log(buf.byteLength);

// numbers of bytes allocated in buffer// method 3:
const buff = Buffer.allocUnsafe(20);
buff.fill();

// it wil clear all data inside tPhe buffer
buff.write('hello brother');
console.log(buff.toString());
