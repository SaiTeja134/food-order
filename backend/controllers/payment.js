const Payment = require('../models/payment');

const makePayment = async (req, res) => {
  try {
    const { paymentMode, orderId, customerId, email, name, paymentDesc, phNo, totalPrice, status } = req.body;
    
    if (!paymentMode || !email || !name || !paymentDesc || !phNo || !totalPrice || !status) {
      return res.status(400).json({ error: true, message: 'Bad request' });
    }

    const newPayment = await Payment.create({
      paymentMode, 
      orderId, 
      customerId, 
      email, 
      name, 
      paymentDesc, 
      phNo, 
      totalPrice, 
      status
    });

    res.status(200).json({error:false, success: true, payment: newPayment,message: 'Payment is successful' });
  } catch (error) {
    res.status(500).json({success:false, error: true, message: error.message });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ success: true, data: payments, error: false });
  } catch (error) {
    res.status(400).json({ error: true, message: 'Bad request' });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: true, message: 'Payment not found' });
    }
    res.status(200).json({ success: true, data: payment });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

const deletePaymentById = async (req, res) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment) {
      return res.status(404).json({ error: true, message: 'Payment not found' });
    }
    res.status(200).json({ success: true, message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = { 
  makePayment, 
  getAllPayments, 
  getPaymentById, 
  deletePaymentById 
};