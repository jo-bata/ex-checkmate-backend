const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config/config');
const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth/', auth);

module.exports = app;