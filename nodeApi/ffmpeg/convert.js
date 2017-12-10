var ffmpeg = require('fluent-ffmpeg');
var startTime = null,
    endTime = null,
    sumTime = null;
const command = ffmpeg('../../public/video/1.mp4')
// 视频编码格式
    .addOption('-c:v', 'libx264')
    // 音频编码
    .addOption('-c:a', 'aac')
    // 设置每片的长度
    .addOption('-hls_time', 10)
    // 放列表保存的最多条目
    .addOption('-hls_list_size', 0)
    .on('start', function () {
        startTime=new Date();
    })
    .on('end', function () {
        endTime=new Date();
        sumTime=endTime-startTime;
        console.log("用时："+sumTime/1000+"s");
    })
    .save('../../public/checkout/ts1/test.m3u8');