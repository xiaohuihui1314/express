const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId,
    advertSchema = new Schema({
        adsenseId: {type: ObjectId, ref: "Adsense"},
        // 广告标题
        title: {
            unique: true,
            type: String
        },
        // 广告图片连接
        url:String,
        // 广告连接
        link:String,
        // 广告描述
        describe:String,
        // 开始时间
        startTime:Date,
        // 结束时间
        endTime:Date,
        // 结束时间
        state:Boolean,
        // 排序
        sort: Number
    });
module.exports = advertSchema;