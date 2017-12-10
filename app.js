var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var boot = require('./config/router/routerConfig');
var ejs =require("ejs");
require("./db/config");
var models_path = __dirname + '/db/models';
var dbMode =  path=>{
    fs.readdirSync(path)
        .forEach( file=>{
            var newPath = path + '/' + file;
            var stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js|coffee)/.test(file)) {
                    require(newPath)
                }
            }
            else if (stat.isDirectory()) {
                dbMode(newPath)
            }
        })
};
dbMode(models_path);
var app = express();
app.serviceStartTime = new Date();
var router = express.Router();
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
boot(app, router);
module.exports = app;
