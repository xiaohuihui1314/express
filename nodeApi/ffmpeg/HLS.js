var ffmpeg = require('fluent-ffmpeg');

var proc = new ffmpeg({ source:'../../public/video/test.mp4'})
// set video bitrate
    .withVideoBitrate(300)
    // set target codec
    .withVideoCodec('libx264')
    // HLS preset
    // .addOption('-preset','ultrafast')
    // Set fps
    .withFps(20)
    // set audio bitrate
    .withAudioBitrate('128k')
    // set audio codec
    // set number of audio channels
    .withAudioChannels(2)
    // set hls segments time
    .addOption('-hls_time', 13)
    // include all the segments in the list
    .addOption('-hls_list_size',0)
    .save('../../public/checkout/ts/1.m3u8', function(retcode, error) {
        console.log(error,retcode);
    });
