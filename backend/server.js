// Importing the packages
const connectDB = require('./db');
const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

// Setting the port
const app = express();
const PORT = process.env.PORT || 5000;

// Connecting middleware
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

// First test route
app.get('/', (req, res) => {
    res.json({ message: "Dev Tracker API is running successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});