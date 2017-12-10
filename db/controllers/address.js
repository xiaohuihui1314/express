const mongoose = require('mongoose'),
    Address = mongoose.model('Address'),
    token = require("../../config/token");
exports.createAddress = (req, res) => {
    let this_body = req.body;
    const userAddress = new Address(this_body);
    userAddress.save((err, docs) => {
        if (err) {
            return res.json({code: -1, message: "添加失败！"});
        } else {
            return res.json({code: 200, message: "添加成功！"});
        }

    });
};

exports.addressList = (req, res) => {
    Address
        .find({})
        .populate("userId")
        .exec((err, docs) => {
            console.log(docs);
            if (err) {
                const err = {
                    state: -1,
                    error: "数据异常"
                };
                return res.json(err);
            } else if (docs) {
                return res.json(docs);
            }
        })
};

exports.getUserAddress = (req, res) => {
    let this_id = req.query.id;
    Address
        .findOne({userId: this_id})
        .exec((err, docs) => {
                console.log(err);
                console.log(docs);
                if (err) {
                    return res.json({code: -1, message: "数据异常！"});
                } else {
                    return res.json(docs);
                }
            }
        )
};