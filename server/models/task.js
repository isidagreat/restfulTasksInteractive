// Create MOngoose schemas
const mongoose = require('mongoose'),
TaskSchema =new mongoose.Schema({
    title: String,
    updated_at: Date,
    created_at: Date,
    completed: { type: Boolean, default: false },
    description: { type: String, default: '' }
});

module.exports = mongoose.model('Task', TaskSchema);


