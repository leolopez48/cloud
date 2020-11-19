const express = require('express');
const api = require('./routes/index');
const web = require('./routes/web');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const {
    urlencoded
} = require('body-parser');

const app = express();

//Setting port
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/api', api);

module.exports = app;