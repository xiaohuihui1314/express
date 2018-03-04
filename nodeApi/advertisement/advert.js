const advert = require("../../db/controllers/advertisement/advert");
module.exports = router => {
    router.get('/getAdvert', advert.getAdvert);
    router.get('/getAdList', advert.getAdList);
    router.post('/createAdvert', advert.createAdvert);
    router.post('/deleteAdvert', advert.deleteAdvert);
    router.post('/searchAdvert', advert.searchAdvert);
};