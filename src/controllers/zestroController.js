const {zestroModel} = require('../models/dataModels.js');
const {connectDB} = require('../db/index.js');

async function getAllData(req,res){
  
    const data = await zestroModel.find({});
    return data;

};



async function getCategoryData(req,res){
    try{

    }catch(err){
        
    }
}


(
    async()=>{

        try{

          const connection = await connectDB();
            //const data = await getAllData();
            const data = await zestroModel.aggregate([
 
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

        console.log(data);



        }catch(err){

        }finally{
          
        }

    }
)();
