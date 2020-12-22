const Name = require('../models/name');
const express = require('express');
const mongoose = require('mongoose');

exports.find_all_names = (req, res) =>{
  Name.find()
  .exec()
  .then(docs => {
    res.status(200).json(docs);
  }).catch(err => {
    res.status(500).json({
      error, err
    });
  });
}
