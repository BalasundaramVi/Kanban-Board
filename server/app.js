const express = require('express');

const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(parser.json());
app.use(morgan('dev'));

module.exports = app;
