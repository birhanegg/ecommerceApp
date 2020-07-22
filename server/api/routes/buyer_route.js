const express = require('express');
const router = express.Router();

const buyerController = require('../controller/buyer_controller');

router.get('/', buyerController.list);
router.post('/', buyerController.insert);
router.get('/:buyerid', buyerController.findBuyer);
router.post('/cart/:buyerid', buyerController.addProductToCart2);
router.delete('/:buyerid', buyerController.removeBuyer);

router.get('/shippingaddress/:buyerId', buyerController.getShippingAddress);
router.post('/shippingaddress/:buyerId', buyerController.enterShippingAddress);

router.get('/billinginfo/:buyerId', buyerController.getBillingInfo);
router.post('/billinginfo/:buyerId', buyerController.enterBillingInfo);

router.get('/orders/:buyerId', buyerController.getOrdersByBuyerId);
router.get('/notification', buyerController.getNotification);
router.post('/notification', buyerController.getNotification);

module.exports = router;