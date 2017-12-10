const mongoose = require('mongoose'),
    friendList = require('../schemas/friendList'),
    FriendList = mongoose.model('friendList', friendList);

module.exports = FriendList;