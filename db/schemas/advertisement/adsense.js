const mongoose = require("mongoose")
    , Schema = mongoose.Schema;
const adsenseSchema = new Schema({
    // 广告位名称
    name: {
        unique: true,
        type: String
    },
    // 描述
    description: String,
    // 排序
    sort: Number
});
module.exports = adsenseSchema;