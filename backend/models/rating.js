const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  feedback: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Rating', ratingSchema);