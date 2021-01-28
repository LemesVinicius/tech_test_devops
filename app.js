var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRoutes');
var flightsRouter = require('./routes/flightsRoutes');
var citiesRouter = require('./routes/citiesRoutes');
var countriesRouter = require('./routes/countriesRoutes');

require('dotenv').config()

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/cities', citiesRouter);
app.use('/countries', countriesRouter);

module.exports = app;
 