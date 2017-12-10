const adsense = require("../../db/controllers/advertisement/adsense");
module.exports = router => {
    router.get('/getAdsense', adsense.getAdsense)
    router.post('/createAdsense', adsense.createAdsense)
    router.post('/deleteAdsense', adsense.deleteAdsense)
};