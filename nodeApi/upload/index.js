const fs = require('fs'),
    multipart = require('connect-multiparty');
module.exports = router => {
    router
        .post("/upload", multipart(), (req, res) => {
            const file = req.files.file;
            console.log('文件类型：%s', file.type);
            console.log('原始文件名：%s', file.originalFilename);
            console.log('文件大小：%s', file.size + " Kb");
            console.log('文件大小：%s', (file.size / 1024 / 1024 ).toFixed(2) + " M");
            console.log('文件保存路径：%s', file.path);
            const filename = req.files.file.name;
            // 判断图片类型
            let fileTYpe;
            switch (file.type) {
                case 'image/pjpeg':
                    fileTYpe = '.jpg';
                    break;
                case 'image/jpeg':
                    fileTYpe = '.jpg';
                    break;
                case 'image/png':
                    fileTYpe = '.png';
                    break;
                case 'image/x-png':
                    fileTYpe = '.png';
                    break;
            }

            // 创建目录路径
            const filePath = (() => {
                let time = new Date(),
                    fileYear = time.getFullYear(),
                    fileMonth = time.getMonth() + 1,
                    fileDate = time.getDate();
                return fileYear + '-' + fileMonth + '-' + fileDate;
            })();

            // 图片根目录
            const imgRootFilePath = "public/images/" + filePath;

            // 判断目录是否存在
            if (!fs.existsSync(imgRootFilePath)) {
                fs.mkdirSync(imgRootFilePath)
            }

            // 图片重命名
            const imgName = Date.now() + fileTYpe;

            // 图片存放路径
            const targetPath = imgRootFilePath + "/" + imgName;
            fs.createReadStream(file.path).pipe(fs.createWriteStream(targetPath));
            res.json({code: 200, url: filePath + "/" + imgName});
        });
};