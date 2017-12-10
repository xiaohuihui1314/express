const address = require("../../db/controllers/address"),
    token = require("../../config/token");
module.exports = router => {
    router
        .post('/createAddress', address.createAddress)
        .get('/getUserAddress', address.getUserAddress)
        .get('/addressList', address.addressList)
};