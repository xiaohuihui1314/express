const mongoose = require('mongoose'),
    Advert = mongoose.model('Advert');
// 查看广告
exports.getAdvert = (req, res) => {
    Advert.find({})
        .populate("adsenseId")
        .exec((err, docs) => {
            if (err) {
                const err = {
                    code: -1,
                    error: "数据异常"
                };
                return res.json(err);
            } else if (docs) {
                let json = [];
                docs.forEach(function(item) {
                    let obj = {};
                    obj.addressName = item.adsenseId.name;
                    obj.describe = item.describe;
                    obj.startTime = item.startTime;
                    obj.endTime = item.endTime;
                    obj.link = item.link;
                    obj.sort = item.sort;
                    obj.state = item.state;
                    obj.title = item.title;
                    obj.url = item.url;
                    obj.id = item._id;
                    json.push(obj);
                });
                return res.json(json);
            }
        });
};
// 查看某个广告
exports.getAdList = (req, res) => {
    let this_query = req.query;
    Advert.find({ adsenseId: this_query.adsenseId }, (err, docs) => {
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
            return res.json({ code: -1, message: "添加失败！" });
        } else {
            return res.json({ code: 200, message: "添加成功！" });
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
            return res.json({ code: -1, message: "删除失败！" });
        } else {
            return res.json({ code: 200, message: "删除成功！" });
        }
    });
};
// 筛选广告位
exports.searchAdvert = (req, res) => {
    // let this_body = req.body;
    Advert
        .find({ adsenseId: "5a44f95efed2770afc573e29" })
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