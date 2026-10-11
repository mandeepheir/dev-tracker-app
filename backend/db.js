const mongoose = require('mongoose');

// connecting to the database

const connectDB = async () => {

    try {
        // we are connectring to local mongodb
        const conn = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;