const mongoose = require('mongoose');

const devSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
       }
    });
    module.exports = mongoose.model('DevProject', devSchema);