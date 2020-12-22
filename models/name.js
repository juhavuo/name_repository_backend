const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    amount: Number
});

module.exports = mongoose.model('Name', nameSchema);
