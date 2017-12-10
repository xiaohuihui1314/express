var ffmpeg = require('fluent-ffmpeg');
var inputPath = '../../public/video/2.mp4';
ffmpeg(inputPath)
// 宽高比例
// .addOption('-aspect', '4:3')
// .addOption('-aspect', '4:3')
// .addOption('-s', '352*278')
    .output('../../public/checkout/1.webm')
    .run();
