const mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    token = require("../../config/token");
exports.login = (req, res) => {
    const _user = req.body;
    User.findOne({userName: _user.userName}, (err, user) => {
        if (err) {
            res.json({
                message: "数据异常！"
            });
        }
        if (!user) {
            res.json({
                message: "登录异常！"
            });
        } else {
            if (_user.passWord === user.passWord) {
                let content = {
                    userName: user.userName
                };
                res.json({
                    message: "登录成功！",
                    token: token.loginSetToken(content),
                    id: user._id,
                    userName: user.userName,
                    avatar: user.avatar,
                });
            } else {
                res.json({
                    message: "登录失败"
                });
            }
        }
    })
};
exports.userList = (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            const err = {
                code: -1,
                error: "数据异常"
            };
            return res.json(err);
        } else if (docs) {
            return res.json(docs);
        }
    });
};
exports.register = (req, res) => {
    let bodyData = req.body;
    const user = new User(bodyData);
    user.save((err, docs) => {
        if (err) {
            console.log("err");
            const err = {
                code: -1,
                error: "用户名重复"
            };
            return res.json(err);
        } else if (docs) {
            return res.json({
                code: 200,
                userName: bodyData.userName,
                message: "注册成功！"
            });
        }
    });
};