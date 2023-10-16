const mongoose = require('mongoose');
require('dotenv').config();


dbURI = "mongodb://0.0.0.0:27017/music";

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected`);
  });
  mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  
  const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    });
  };
  
  
require('./post');
