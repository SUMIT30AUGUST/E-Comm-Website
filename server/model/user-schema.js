import mongoose, { Schema } from "mongoose";

const userSchema= new mongoose.Schema({
    firstname: {
      type:String,
      required:true,
        trim:true,
        min:5,
        max:20
    },
    lastname: {
      type:String,
      required:true,
        trim:true,
        min:5,
        max:20
    },
  username: {
    type:String,
    require:true,
    trim:true,
    unique:true,
    index:true,
    lowercase:true
  },
  
  email: {
    type:String,
    require:true,
    trim:true,
    unique:true,
    lowercase:true
  },

  email: {
    type:String,
    require:true,
    trim:true,
    unique:true,
    lowercase:true
  },


})
