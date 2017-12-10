const mongoose = require('mongoose'),
    UserSchema = require('../schemas/users'),
    Users = mongoose.model('Users', UserSchema);

module.exports = Users;