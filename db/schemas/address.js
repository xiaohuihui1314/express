const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const userAddress = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: "Users"},
    province: String,
    city: String,
    address: String
});
module.exports = userAddress;