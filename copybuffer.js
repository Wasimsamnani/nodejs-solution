var fun = function () {
    var obj1 = Buffer.from('1234567890');
    var obj2 = Buffer.from("abcwasim");
    obj2.copy(obj1, 1, 3);//is  used to copy the buffer data
    console.log(obj1.toString());
}
fun();