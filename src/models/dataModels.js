const mongoose = require('mongoose');

const schema = new mongoose.Schema({
        category:String,
        link:String,
        productTitle:String,
        price:String,
        productImage:String
});

const darazModel = mongoose.model('darazCollection',schema);
const zestroModel = mongoose.model('zestroCollection',schema);

module.exports = {
    darazModel,
    zestroModel
};

