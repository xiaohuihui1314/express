const client = require('./../redis').client,
    // 定义token的失效时间
    TOKEN_EXPIRATION = 120,
    encryption = require('../encryption');
exports.expireToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token !== null) {
        client.set(token, {is_expired: true});
        client.expire(token, TOKEN_EXPIRATION);
    }
    next();
};
// 登录保存token
exports.loginSetToken = content => {
    const token = encryption.encrypt(content);
    console.log('生成token：' + token);
    client.hmset(token, content);
    // 设置token有效时间
    client.expire(token, TOKEN_EXPIRATION);
    return token;
};
// 验证token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    client.hgetall(token, (err, reply) => {
        if (err) {
            console.log("err " + err);
        } else if (reply === null) {
            res.json({
                code: "token无效！"
            });
        } else {
            console.log(encryption.decrypt(token));
            client.expire(token, TOKEN_EXPIRATION);
            next();
        }
    });
};