// 生成视频缩略图
var ffmpeg = require('fluent-ffmpeg');
var inputPath = '../../public/video/test.mp4';
var outputPath = '../../public/checkout/%d.png';
ffmpeg(inputPath)
// not(mod(n\,24))表示每24帧生成小图
    .addOption('-vf', "select='not(mod(n\,24))',scale=160:120,tile=5x5")
    .addOption('-s', '800x450')
    // -vsync 0是必要的，以防止ffmpeg复制每个输出帧以适应初始检测到的帧速率
    .addOption('-vsync', '0')
    .save(outputPath);
