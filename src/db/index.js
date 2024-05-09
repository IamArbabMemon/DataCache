const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        
        await mongoose.connect('mongodb://127.0.0.1:27017/DataCache');
        console.log('DATABASE HAS BEEN CONNECTED ');

    }catch(err){
        console.log('ERROR HAS OCCURED IN DATABASE CONNECTION , ERROR: ',err);
        process.exit(1);
    }
};


module.exports = {connectDB};

