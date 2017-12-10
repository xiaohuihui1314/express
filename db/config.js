const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// 【mongoose】连接警告：`open()` is deprecated in mongoose >= 4.11.0
// mongoose.connect('mongodb://localhost/user');
//改为
// mongoose.connection.openUri('mongodb://localhost/user')
//或
// mongoose.connect('mongodb://localhost/user',{useMongoClient: true})
mongoose.connection.openUri('mongodb://localhost/user');