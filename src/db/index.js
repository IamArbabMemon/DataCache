const {configData} = require('../../config.js'); 
const mongoose = require('mongoose');


console.log(configData.get('MONGO_URL'));

const connectDB = async ()=>{
    try{
        
        await mongoose.connect(configData.get('MONGO_URL'));
        console.log('DATABASE HAS BEEN CONNECTED ');

    }catch(err){
        console.log('ERROR HAS OCCURED IN DATABASE CONNECTION , ERROR: ',err);
        process.exit(1);
    }
};



module.exports = {connectDB};

