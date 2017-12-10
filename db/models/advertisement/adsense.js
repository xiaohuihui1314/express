const mongoose = require('mongoose'),
    AdsenseSchema = require('../../schemas/advertisement/adsense'),
    Adsense = mongoose.model('Adsense', AdsenseSchema);

module.exports = Adsense;