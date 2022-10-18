const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const router = require('./routes/pageRouter');
const expressLayout = require('express-ejs-layouts');
const mongodbconnection = require('./config/db');
const mongoTest = require('./controllers/mogodbcontroler');
const { json } = require('express');

//========================================> config dotenv
dotenv.config();
//======================================> init port
const port = process.env.PORT || 5000;

//=======================================> create app
const app = express();

//=======================================> json and url
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//======================================> app set
app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layouts/app');
//=====================================>  use app
app.use(router);
//====================================> public folder static
app.use(express.static('public'));
//===================================> Mongodb model import
mongoTest();
//====================================> crate server

app.listen(port, () => {
  mongodbconnection();
  console.log(`server is running port ${port}`.bgMagenta);
});
