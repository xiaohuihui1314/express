const redis = require("redis"),
    RDS_PORT = 6379,        //端口号
    RDS_HOST = '127.0.0.1',    //服务器IP
    // RDS_PWD = '',    //密码
    RDS_OPTS = {},            //设置项
    client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

// client.auth(RDS_PWD, function () {
//     console.log('redis通过认证!');
// });
client.on("error", err => {
    console.log("Error " + err);
});

client.on('connect', () => {
    console.log('Redis 已启动！');
});

exports.client = client;