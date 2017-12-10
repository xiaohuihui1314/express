const users = require("../../db/controllers/users"),
    friend = require("../../db/controllers/friendList"),
    token = require("../../config/token");
module.exports = router => {
    router

        .get('/', (req, res, next) => {
            res.header("Content-Type", "text/html;charset=utf-8");
            res.render('index');
        })
        .get('/checkToken', token.verifyToken, (req, res, next) => {
            res.json({
                code: "token有效！"
            });
        })
        .get('/test', (req, res, next) => {
            setTimeout(function () {
                res.json({
                    data: "这是成功的数据哦！",
                    code: 200,
                    success: true
                });
            }, 5000)
        })
        .post('/login', users.login)
        .post('/register', users.register)
        .get("/userList", users.userList)
        .post("/addFriend", friend.addFriend)
        .post("/deleteFriend", friend.deleteFriend)
        .get("/getAllFriend", friend.getAllFriend)
        .get("/verifyToken", token.verifyToken, (req, res, next) => {
            res.json({
                message:'验证成功！'
            });
        })
        .get("/downloads", (req, res, next) => {
            console.log("downloads")
            res.download('./public/aaa.txt')
        })
    return router;
};
