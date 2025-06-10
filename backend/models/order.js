const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  menuItems: {
    type: Array,
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  tableNo: {
    type: Number,
    required:true
  },
  status: {
    type: String,
    required: true,
  },
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment'
  },
});

module.exports = mongoose.model('Order', orderSchema);