const express = require('express');

const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(favicon(path.join(__dirname, '../client/public/assets/calendar-icon.png')));

app.use(parser.json());
app.use(morgan('dev'));

module.exports = app;
