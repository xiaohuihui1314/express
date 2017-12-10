const mongoose = require('mongoose'),
    AdvertSchema = require('../../schemas/advertisement/advert'),
    Advert = mongoose.model('Advert', AdvertSchema);

module.exports = Advert;