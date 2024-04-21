const dotenv = require('dotenv');
const { Mongoose } = require('mongoose');

dotenv.config({
    path:'./.env'
});

const _configData = {
    MONGO_URL : process.env.MONGO_URL
};

const configData = Object.freeze({
    get(key){
        if(!key || !_configData[key])
           throw new Error('KEY IS NOT AVAILABLE');
     
       return _configData[key];    

    }
});


module.exports = {configData};