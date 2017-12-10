const mongoose = require('mongoose'),
    Adsense = mongoose.model('Adsense');
// 查询
exports.getAdsense = (req, res) => {
    Adsense.find({}, (err, docs) => {
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
// 新增广告位
exports.createAdsense = (req, res) => {
    let this_body = req.body;
    console.log(this_body)
    const adsense = new Adsense(this_body);
    adsense.save((err, docs) => {
        if (err) {
            return res.json({code: -1, message: "添加失败！"});
        } else {
            return res.json({code: 200, message: "添加成功！"});
        }

    });
};
// 删除广告位
exports.deleteAdsense = (req, res) => {
    let this_body = req.body;
    console.log(this_body)
    const data = {
        _id: this_body.id
    };
    Adsense.remove(data,(err, docs) => {
        if (err) {
            return res.json({code: -1, message: "删除失败！"});
        } else {
            return res.json({code: 200, message: "删除成功！"});
        }

    });
};