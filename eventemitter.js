const events = require('events');

const emitter = new events();
const fun = () => {
  console.log("hey from first function of events");
}
emitter.on("myevent", fun)
//passing the pasameter into function
emitter.on("myevent1",(rollno,sname) => {
  console.log(`rollno:${rollno}`);
  console.log(`sname :${sname}`);
})

emitter.emit("myevent1",101,"wasim");
