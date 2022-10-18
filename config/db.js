const mongoose = require('mongoose');
const dotenv = require('dotenv').config;
//=======================connection with mongodb
const mongodbconnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.SERVER);
    console.log(`MONGODB Connected successfully `.bgGreen);
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

module.exports = mongodbconnection;
