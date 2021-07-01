const http = require('http'); 
var display = () => console.log("good mornning");
display();
var dis = (no1, no2) => {

    console.log("mul=" +no1*no2);
}
dis(10, 20);
var fact = (no) => {
    var fact = 1,i;
    for (i = 1; i <=no; i++) {
        fact = fact * i;
    }
    console.log("factorial=" + fact);
}
fact(5);
var mul = (no) => {
     let i=1;
    while (i<=10) {
        let result = no * i;
        console.log("mul" + result);
        i =i+1;
    }

}
mul(2);
