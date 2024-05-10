const {zestroModel} = require('../models/dataModels.js');

async function getAllData(req,res){
  
  try{
    const categories = ['Graphic Cards','Processors','Gaming PC'];
    const queryObj = req.query;
    let data;
  
    if(Object.keys(queryObj).length===0){
       data = await zestroModel.find({});
      return res.status(200).json(data);
    }

    if(queryObj.category && categories.includes(queryObj.category)){
    data = await zestroModel.find({category:queryObj.category});
    return res.status(200).json(data);
  }else{
    return res.status(404).json({error:'Category not found'});
  }


  }catch(err){
    console.log(err);
    return res.status(500).json({error:err});

  }
    
};

module.exports = {
  getAllData
};
