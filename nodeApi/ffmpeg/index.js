const ffmpeg = require('fluent-ffmpeg');
const proc = ffmpeg('../../public/images/2017-7-18/1500378504203.png')
// loop for 5 seconds
    .loop(5)
    // using 25 fps
    .fps(25)
    // setup event handlers
    .on('end', function() {
        console.log('file has been converted succesfully');
    })
    .on('error', function(err) {
        console.log('an error happened: ' + err.message);
    })
    // save to file
    .save('../../public/video/1.mp4');
// module.exports = router => {
//
// }