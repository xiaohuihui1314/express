const mongoose = require('mongoose'),
    address = require('../schemas/address'),
    Address = mongoose.model('Address', address);

module.exports = Address;