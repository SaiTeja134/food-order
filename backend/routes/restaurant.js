const express = require('express');
const router = express.Router();
const tableController = require('../controllers/table');
const menuController = require('../controllers/menu')
const paymentController = require('../controllers/payment')
const userController = require('../controllers/users')
const ratingController = require('../controllers/rating');
router.get('/tables', tableController.getAllTables);
// Add new table
router.post('/tables', (req, res, next) => {
  console.log(req.body);
  const { tableNo, capacity } = req.body;  
  // Basic validation
  if (!tableNo || !capacity || ![2, 4, 6].includes(capacity)) {
    return res.status(400).json({ 
      error: true, 
      message: 'Table number and capacity (2,4,6) are required' 
    });
  }
  
  if (tableNo < 1 || tableNo > 150) {
    return res.status(400).json({ 
      error: true, 
      message: 'Table number must be between 1-150' 
    });
  }  
  next();
}, tableController.addTable);
router.get('/getAllMenu',menuController.getAllMenuItems);
router.post('/addMenu',menuController.addMenuItem);
router.get('/getAllUsers',userController.getAllUsers);
router.patch('/table/editStatus', (req, res, next) => {
  const { alloted, served, booked,_id } = req.body;
  console.log(req.body);  
  if (!_id) {
    return res.status(400).json({ 
      error: true, 
      message: 'Table ID is required' 
    });
  }
  
  if (!alloted && !served && !booked) {
    return res.status(400).json({ 
      error: true, 
      message: 'At least one status field is required' 
    });
  }  
  next();
}, tableController.updateTableStatus);
// Book table
router.patch('/tables/:id/book', (req, res, next) => {
  const { bookingDate, bookingTime } = req.body;
 //console.log(req.body);
  if (!req.params.id || !bookingDate || !bookingTime) {
    return res.status(400).json({ 
      error: true, 
      message: 'Table ID, booking date and time are required' 
    });
  }
  
  next();
}, tableController.bookTable);
router.get('/getAllPayments',paymentController.getAllPayments);
router.get('/makePayment',paymentController.makePayment);
router.patch('/tables/:id/book',tableController.bookTable);
router.post('/ratings',ratingController.addRatings);
router.post('/rating/user/:userId',ratingController.getRatingsByUserId);

module.exports = router;