const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/wasimsamnani",
{ useNewUrlParser: true ,
  useUnifiedTopology: true})
  .then(()=>console.log("data base connected"))
.catch((err)=>console.log(err));
const UserSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:Number,
    required:true
  }
})
 const users=new mongoose.model("users",UserSchema)
const insertin= async ()=>{
  try{
    const wasim=new users({
      name:"wasim",
      password:"123456789"
    })
    const yoyo=new users({
      name:"yoyo",
      password:"98598191"
    })
    const anam=new users({
      name:"anam",
      password:"123143423"
    })

    const result= await users.insertMany([wasim,yoyo,anam]);
   console.log(result);
 }catch(err){
   console.log(err);
 }
}
// insertin();
const readusers= async ()=>{
  const result= await users
  .find({password:{$gt:100}})
  .select({name:1})
  .limit(10)
  console.log(result);
}
readusers();
