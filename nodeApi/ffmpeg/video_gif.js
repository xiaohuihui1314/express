var ffmpeg = require('fluent-ffmpeg');

ffmpeg('../../public/video/test.mp4')
    // 开始时间
    .addOption('-ss', '00:00:26')
    // 结束时间
    .addOption('-to', '00:00:38')
    // 持续时间
    // .addOption('-t', '10')
    // 图片大小
    .addOption('-s', '320x240')
    // 像素格式
    // .addOption('-pix_fmt', 'rgb24')
    .save('../../public/checkout/gif/test.gif');