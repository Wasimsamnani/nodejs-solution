const nodemailer = require('nodemailer');


//creating a transporter
const transport=nodemailer.createTransport({
  service:"GMAIL",
  auth:{
    user:"wasimsamnani110@gmail.com",
    pass:"wasim123"
  }
});

//creating a variable and writing a mail ,storing in it

const mailOptions={
  from:"wasimsamnani110@gmail.com",
  to:"wasimsamnani110@gmail.com",
  subject:"writhing a mail from nodemailler",
  text:"hello from nodemailler this is wasim samnani"
}
transport.sendMail(mailOptions,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("it was send");
  }

})
