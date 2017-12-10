const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    UserSchema = new Schema({
        //用户名
        userName: {
            unique: true,
            type: String
        },
        //密码
        passWord: String,
        //创建时间
        createTime: {
            type: Date,
            default: Date.now
        },
        avatar: String
    });
module.exports = UserSchema;