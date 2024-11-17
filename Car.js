const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    images: [String],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
