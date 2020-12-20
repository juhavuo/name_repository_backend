'use strict';

const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) =>{
  res.status(200).json({
    'message': 'in the root'
  });
});

app.listen(process.env.APP_PORT);
