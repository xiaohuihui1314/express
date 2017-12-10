const mongoose = require('mongoose'),
    friendList = mongoose.model('friendList'),
    token = require("../../config/token");
exports.addFriend = (req, res) => {
    const this_body = req.body;
    /*不能添加自己为好友*/
    if (this_body.friend == this_body.user) {
        return res.json({code: -1, message: "不能添加自己为好友！"});
    }
    friendList.findOne({user: this_body.user}, (err, friends) => {
        if (friends) {
            /* 已经添加过好友*/
            let friendsId = this_body.friend;
            for (let value of friends.companion) {
                if (friendsId == value) {
                    return res.json({code: -1, message: "你们已经是好友了！"});
                }
            }
            friends.companion.push(friendsId);
            friends.save((err, docs) => {
                if (err) {
                    return res.json({code: -1, message: "添加失败！"});
                } else {
                    return res.json({code: 200, message: "添加成功！"});
                }
            });
        } else {
            /* 第一次添加好友*/
            const addFriendObj = {
                user: this_body.user,
                companion: [this_body.friend]
            };
            const AddFriend = new friendList(addFriendObj);
            AddFriend.save((err, docs) => {
                if (err) {
                    return res.json({code: -1, message: "添加失败！"});
                } else {
                    return res.json({code: 200, message: "添加成功！"});
                }
            });
        }
    });
};

exports.deleteFriend = (req, res) => {
    const this_body = req.body;
    friendList.findOne({user: this_body.user}, (err, friends) => {
       if(friends){
           let friendIndex = friends.companion.indexOf(this_body.friend);
           if (friendIndex > -1) {
               friends.companion.splice(friendIndex, 1);
               friends.save((err, docs) => {
                   if (err) {
                       return res.json({code: -1, message: "删除失败！"});
                   } else {
                       return res.json({code: 200, message: "删除成功！"});
                   }
               });
           }else {
               return res.json({code: -1, message: "非法操作！"});
           }
       }else {
           friendList.findOne({user: this_body.friend}, (err, friends) => {

           })
       }

    });
};


exports.getAllFriend = (req, res) => {
    friendList
        .find({})
        .populate("companion")
        .populate("user")
        .exec((err, docs) => {
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
