// importing the packages 
const connectDB = require('./db');
const express = require('express');
const cors=require('cors');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

//setting the port 

const app = express();
const PORT = process.env.PORT || 5000;

// connecting middleware 


connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);


// first test route

app.get('/',(req,res)=>{
  res.json({message:"Debt Tracker API is running successfully"});

});

// staring the server 

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})