const {connectDB} = require('./db/index.js');
const {router:darazRouter} = require('./routes/daraz.routes.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/api/v1/daraz',darazRouter);


const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT,()=>console.log('server is running'));
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})
