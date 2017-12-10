const routerSet = require("./routerSet");

module.exports = (app, router) => {
    routerSet(router);
    app
    // 中间件
        .use((req, res, next) => {
            // > req.url
            // "/id"
            // > req.originalUrl
            // "/user/id"
            // > req.baseUrl
            // "/user"

            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "x-requested-with,content-type,Authorization");
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("Access-control-allow-credentials", "true");
            res.header("Content-Type", "application/json;charset=utf-8");
            if (req.method == "OPTIONS") {
                res.sendStatus(200);
                /*让options请求快速返回*/
            }
            else {
                // console.log(req.originalUrl, req.originalUrl === "/login")
                next();
            }
        })
        .use('/', router)
        // 404
        .use((req, res, next) => {
            const err = new Error('Not Found');
            err.status = 404;
            next(err);
        })
        // 500
        .use((err, req, res, next) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(err.status || 500);
            res.render('error');
        });
};
