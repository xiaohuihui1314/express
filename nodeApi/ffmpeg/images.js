const ffmpeg = require('fluent-ffmpeg');

var promise = new Promise(function(resolve) {
    ffmpeg.ffprobe('../../public/video/test.mp4',  (err, metadata) =>{
        console.log(metadata)
        resolve(metadata.format.duration);
    });

});
promise.then((res)=>{
    console.log(res)
    console.log(Math.ceil(res))
    ffmpeg('../../public/video/BigBuckBunny.mp4')
        .on('filenames', function (filenames) {
            console.log(filenames)
        })
        .on('start', function (start) {
            console.log("start")
            console.log(start)
        })
        .on('filenames', function (filenames) {
            console.log('Will generate ' + filenames.join(', '))
        })
        .on('end', function () {
            console.log('Screenshots taken');
        })
        .screenshots({
            // 指定要生成多少个缩略图。
            // 使用此选项时，会在视频中定期生成缩略图（例如，请求3个缩略图时，视频长度的25％，50％和75％）。
            // count当被忽略timemarks或timestamps指定的。
            count: Math.floor(res)/9,
            // 重命名
            //该filename选项指定生成的文件的文件名模式。它可能包含以下格式令牌：
            // '％s'：以秒为单位的偏移量
            // '％w'：截图宽度
            // '％h'：截图高度
            // '％r'：截图分辨率（与'％wx％h'相同）
            // '％f'：输入文件名
            // '％b'：输入basename（文件名w / o扩展名）
            // '％i'：在timemark数组中的屏幕截图的索引（可以通过使用它进行零填充%000i）
            filename: 'test_%s_%i',
            // timemarks或timestamps：指定视频中应采用缩略图的时间戳数组
            // 。每个时间戳记可以是数字（以秒为单位），百分比字符串（例如“50％”）
            // 或格式为“hh：mm：ss.xxx”的时间戳字符串（其中小时，分钟和毫秒都是可选的）。
            // timemarks: [ '50%', '70%' ],
            // 图片输出宽高比率
            // size: '300x300',
            // 输出路径
            folder: '../../public/checkout/images'
        });
});

