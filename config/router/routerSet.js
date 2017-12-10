module.exports = router => {
    // require("../../nodeApi/ffmpeg")(router);
    require("../../nodeApi/user/users")(router);
    require("../../nodeApi/user/address")(router);
    require("../../nodeApi/advertisement/adsense")(router);
    require("../../nodeApi/advertisement/advert")(router);
    require("../../nodeApi/upload")(router);
};