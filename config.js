const dotenv = require('dotenv');

dotenv.config({
    path:'./.env'
});

const _configData = {
    MONGO_URL : process.env.MONGO_URL
};

const configData = Object.freeze({
    getKey(){
        return _configData.MONGO_URL
    }
});


module.exports = {configData};