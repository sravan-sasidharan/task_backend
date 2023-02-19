const express=require('express');
const connectDB = require('./config/db');
const cors=require('cors');
const PORT=5000;
connectDB();
const app= express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use('/job',require('./routes/jobRoutes'))
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})