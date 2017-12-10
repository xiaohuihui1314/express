const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    FriendSchema = new Schema({
        user: {type: ObjectId, ref: "Users"},
        companion: [
            {
                type: ObjectId, ref: "Users"
            }
        ]
    });
module.exports = FriendSchema;