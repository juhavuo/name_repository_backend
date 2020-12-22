'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const namerouter = require('./routers/namerouter');

require('dotenv').config();

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/names`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected successfully.');
}, err => {
  console.log('Connection to db failed: ' + err);
});

mongoose.set('useCreateIndex', true);

app.get('/', (req, res) =>{
  res.status(200).json({
    'message': 'testing'
  });
});

app.use('/names', namerouter);

app.listen(process.env.APP_PORT);
