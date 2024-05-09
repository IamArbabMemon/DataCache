const {darazModel} = require('../models/dataModels.js');

async function getAllData(req,res){
  
  try{
    const categories = ['Monitors','Laptop','Gaming Accessories'];
    const queryObj = req.query;
    let data;
  
    if(Object.keys(queryObj).length===0){
       data = await darazModel.find({});
      return res.status(200).json(data);
    }

    if(queryObj.category && categories.includes(queryObj.category)){
    data = await darazModel.find({category:queryObj.category});
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






/*


db.products.aggregate([
  {
    $group: {
      _id: "$category",  // Group by category
      count: { $sum: 1 }  // Count the occurrences of each category
    }
  },
  {
    $project: {
      _id: 0,  // Exclude _id field from output
      category: "$_id",  // Rename _id to category
      count: 1  // Include the count field
    }
  }
]);


*/