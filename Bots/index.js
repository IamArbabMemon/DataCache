const mongoose = require('mongoose');
const {getTotalProductsFromDaraz} = require('./darazBot.js');
const {getTotalProductsFromZestro} = require('./zestroBot.js');
const {darazModel,zestroModel} = require('../src/models/dataModels.js');

async function execute(){

    try{

     const connection = await mongoose.connect('mongodb://127.0.0.1:27017/DataCache');
    const result = await zestroModel.deleteMany({});
    console.log(result.deletedCount);
     const zestroData = await getTotalProductsFromZestro();
     console.log(zestroData.length);
     await zestroModel.insertMany(zestroData);
      
      await darazModel.deleteMany({});  
     const darazData = await getTotalProductsFromDaraz();
     console.log(darazData.length);
     await darazModel.insertMany(darazData);   
     
    
}catch(err){
    console.log("ERROR OCCURED IN GETTING AND SENDING THE DATA TO DATABASE ",err);
    execute();
    process.exit(1);
    

}finally{
    await mongoose.disconnect()
}
    

};

execute();