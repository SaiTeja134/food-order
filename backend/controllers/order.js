const Order = require('../models/order');
const createOrder = async (req, res) => {
  try {
    const { menuItems, customerId, description, totalPrice, tableNo, status } = req.body;
    console.log(req.body)
    if (!menuItems || !customerId || !description || !tableNo || !totalPrice  || !status) {
      return res.status(400).json({ error: true, message: 'Bad request' });
    }
    const newOrder = await Order.insertMany([
      { menuItems, customerId, description, totalPrice, tableNo, status },
    ]);
    res.status(200).json({ success: true, order: newOrder });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};
const reviewOrder = async (req, res) => {
  try {
    const { customerId } = req.params;
    if (!customerId) {
      return res.status(400).json({ error: true, message: 'Bad request' });
    }
    const order = await Order.findOne({ customerId });
    if (!order) {
      return res.status(404).json({ error: true, message: 'Order not found' });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = { createOrder, reviewOrder };