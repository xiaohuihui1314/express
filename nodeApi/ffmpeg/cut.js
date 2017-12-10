var ffmpeg = require('fluent-ffmpeg');
var startTime = null,
    endTime = null,
    sumTime = null;
// -ss time_off        set the start time offset 设置从视频的哪个时间点开始截取，上文从视频的第10s开始截取
// -to 截到视频的哪个时间点结束。上文到视频的第15s结束。截出的视频共5s.
//     如果用-t 表示截取多长的时间如 上文-to 换位-t则是截取从视频的第10s开始，截取15s时长的视频。即截出来的视频共15s.
 ffmpeg('../../public/video/1.mp4')
 // 视频编码格式
    .addOption('-ss', '00:04:00')
    .addOption('-to', '00:07:40')

    .on('start', function () {
        startTime=new Date();
    })
    .on('end', function () {
        endTime=new Date();
        sumTime=endTime-startTime;
        console.log("用时："+sumTime/1000+"s");
    })
    .save('../../public/video/cut.mp4');