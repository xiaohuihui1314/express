module.exports = function (server) {
    const io = require("socket.io")(server);
    // 链接成功！
    let users = 0;
    const userData = [];
    io.on('connection', function (socket) {
        socket.on('user in', function (msg) {
            users++;
            userData.push(msg);
            socket.nickname = msg;
            const data = {};
            data.userNumber = users;
            data.newUser = "欢迎:" + msg;
            io.emit('chat message', data);
        });
        // 离开会话
        socket.on('disconnect', function () {
            if (!socket.nickname) return;
            if (userData.indexOf(socket.nickname) > -1) {
                userData.splice(userData.indexOf(socket.nickname), 1)
            }
            users--;
            users = users < 0 ? 0 : users;
            const outMessage = socket.nickname + '离开了聊天室！';
            const outData = {
                userNumber: users,
                outMessage: outMessage
            };
            console.log(outMessage);
            io.emit('user out', outData);
        });
    });
};