const express = require('express');
const {register, getAllUsers, resetPassword, login,forgotPassword} = require('../controllers/users');
const orderController = require('../controllers/order')
const paymentController = require('../controllers/payment')
const router =  express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.post('/forgot-password',forgotPassword)
router.post('/reset-password', resetPassword);
router.get('/order/review/:id',orderController.reviewOrder);
router.post('/order',orderController.createOrder);
router.post('/payment',paymentController.makePayment);



exports.forgotPassword = async (req, res, next) => {
    try {
        const {email} = req.body;
        const result = await forgotPassword(email);
        res.status(200).json(result);
        
    } catch (error) {
        next(error); 
    }
};

exports.resetPassword = async (req,res,next) => {
    try {
          const {newPassword,token} = req.body;
        const result = await resetPassword(token,newPassword);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

// router.get('/',getAllUsers);
module.exports = router;
