const mongoose = require('mongoose');

//==================================>  mongoose.Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['Female', 'Male'],
    },
    photo: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//create collection
module.exports = mongoose.model('user', userSchema);
