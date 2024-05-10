const {connectDB} = require('./db/index.js');
const {router:darazRouter} = require('./routes/daraz.routes.js');
const {router:zestroRouter} = require('./routes/zestro.route.js');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const dotenv = require('dotenv');

dotenv.config({
    path:'./.env'
});


app.use('/api/v1/daraz',darazRouter);
app.use('/api/v1/zestro',zestroRouter);


const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT,()=>console.log('server is running'));
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})
