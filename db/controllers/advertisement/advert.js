const mongoose = require('mongoose'),
    Advert = mongoose.model('Advert');


// 查看广告
exports.getAdvert = (req, res) => {
    Advert.find({}, (err, docs) => {
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
// 新增广告
exports.createAdvert = (req, res) => {
    let this_body = req.body;
    const advert = new Advert(this_body);
    advert.save((err, docs) => {
        if (err) {
            return res.json({code: -1, message: "添加失败！"});
        } else {
            return res.json({code: 200, message: "添加成功！"});
        }
    });
};
// 删除广告位
exports.deleteAdvert = (req, res) => {
    let this_body = req.body;
    const data = {
        _id: this_body.id
    };
    Advert.remove(data, (err, docs) => {
        if (err) {
            return res.json({code: -1, message: "删除失败！"});
        } else {
            return res.json({code: 200, message: "删除成功！"});
        }

    });
};
// 筛选广告位
exports.searchAdvert = (req, res) => {
    // let this_body = req.body;
    Advert
        .find({adsenseId: "596f5c69d57b32240c258d48"})
        .populate("adsenseId")
        .exec((err, docs) => {
            if (err) {
                const err = {
                    code: -1,
                    error: "数据异常"
                };
                return res.json(err);
            } else {
                return res.json(docs);
            }
        });
};