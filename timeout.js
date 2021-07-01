function display() {
    console.log("good morning")
    console.log(__filename)
    console.log(__dirname)
}
var x = setInterval(display, 5000);
clearInterval(x);
display();
//over
z