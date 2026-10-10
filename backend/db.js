const mongoose = require('mongoose');

// connecting to the database

const connectDB = async () => {

    try {
        // we are connectring to local mongodb
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/dev-tracker')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;