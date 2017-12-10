var ffmpeg = require('fluent-ffmpeg');
var startTime = null,
    endTime = null,
    sumTime = null;
const command = ffmpeg('../../public/video/test.mp4')
// 视频编码格式
    .addOption('-c:v', 'libx264')
    // 音频编码
    .addOption('-c:a', 'aac')
    // 尺寸
    // 开始长度
    .addOption('-hls_init_time', '10')
    // 设置每片的长度
    .addOption('-hls_time', '10')
    // ts开始顺序
    // .addOption('-start_number', 0)
    // 明确设置客户端MAY（1）还是MUST NOT（0）缓存媒体段。
    .addOption('-hls_allow_cache', 0)
    // ts路径
    .addOption('-hls_base_url', '../ts/')
    // 放列表保存的最多条目
    // .addOption('-hls_key_info_file', '../../public/key/video.keyinfo')
    .on('start', function () {
        startTime=new Date();
    })
    .on('end', function () {
        endTime=new Date();
        sumTime=endTime-startTime;
        console.log("用时："+sumTime/1000+"s");
    })
    .save('../../public/checkout/m3u8/test.m3u8');
// #EXT-X-KEY
// 表示怎么对media segments进行解码。其作用范围是下次该tag出现前的所有media URI，属性为NONE 或者 AES-128。NONE表示 URI以及IV（Initialization Vector）属性必须不存在， AES-128(Advanced EncryptionStandard)表示URI必须存在，IV可以不存在。
// 对于AES-128的情况，keytag和URI属性共同表示了一个key文件，通过URI可以获得这个key，如果没有IV（Initialization Vector）,则使用序列号作为IV进行编解码，将序列号的高位赋到16个字节的buffer中，左边补0；如果有IV，则将改值当成16个字节的16进制数。