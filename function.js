var addition = function () {
    console.log("i a anonymous function");
}
addition();
function addition1() {
	var a = 10;
	var b = 20;
	var c = a + b;
	console.log(c);
}
addition1();
var add = function () {
	var a = "wasim";
	var b = "samnani";
	c = a + b;
	console.log("fullname=" + c);
}
add();
var add1 = function (no1, no2)
{
	var result;
	result = no1 + no2;
	console.log("addition=",result);
}
add1(10, 20);
var details = function (fname,lname) {
	var fullname;
	fullname = fname + lname;
	console.log("full name =" +fullname);
}
details("wasim", "samnani");
var find = function (radius) {
	var areaofcircle;
	var pi = 3.14;
	areaofcircle = pi * radius * radius;
	console.log("area of circle =" + areaofcircle);
}
find(5);
var mul = function (no1) {
	var i;
	var result;
	for (i = 1; i <= 10;i++)
	{
		result = no1 * i;
		console.log("multiplication table=", +result);
    }
}
mul(20);