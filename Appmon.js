const mongoose = require("mongoose");
const validator = require('validator');
//creating the connection to database
mongoose.connect("mongodb://localhost:27017/dbs", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("connection is started")).catch((err) => console.log(err))
//bellow is architechture for database it defines or tells database to accept only this type data with assigned fields
const PlaylistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  ctype: String,
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("total shoule not be negative")
      }
    }
  },
  author: String,
  email: {
    type: String,
    validate(v) {
      if (!validator.isEmail(v)) {
        throw new Error("invalid email")
      }
    }
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})
//creating the model also known as collection in mongodb we use model
const Playlist = new mongoose.model("Playlist", PlaylistSchema);
const createdocument = async () => {
  try {
    //   const jsPlaylist=new Playlist({
    //     name:"javascript",
    //     ctype:"front end",
    //     videos:20,
    //     author:"wasim samnani",
    //     active:true
    // })
    // const nodejs=new Playlist({
    //   name:"nodejs",
    //   ctype:"back end",
    //   videos:30,
    //   author:"wasim samnani",
    //   active:false
    // })
    // const express=new Playlist({
    //   name:"express",
    //   ctype:"back end",
    //   videos:60,
    //   author:"wasim samnani",
    //   active:true
    // })
    const mongoose = new Playlist({
      name: "Mongoose express JS",
      ctype: "back end",
      videos: "50",
      autor: "wasim samnani",
      email: "wasim110@gmail.com",
      active: true

    })
    Playlist.createIndexes
    const result = await Playlist.insertMany([mongoose]);
    console.log(result)
  } catch (err) {
    console.log(err);
  }
}
// createdocument();

//this is bassically geting data function from mongodb database;
const getDocument = async () => {
  try {
    const result = await Playlist
      //to logically display data we have $or $and $not $nor etc...
      .find({
        author: "wasim samnani"
      })
      .select({
        name: 1
      })
      // .countDocuments()
      .sort({
        name: 1
      })
    // .limit(5)
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
//bellow is update function to update the data in database
const updateDocument = async (name) => {
  try {
    const result = await Playlist.updateMany({
      name
    }, {
      $set: {
        name: "Node js"
      }
    })
    console.log(result);
  } catch (err) {
    console.log(err);
  };
}
// updateDocument("Nodejs");

//this is delete function with async and await
const DeleteDocument = async (name) => {
  try {
    const result = await Playlist.deleteOne({
      name
    })
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
// DeleteDocument("mongoose")
getDocument();
wasimsamnani
