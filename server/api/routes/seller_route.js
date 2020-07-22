const express = require('express');
const router = express.Router();

const seller_Controller = require('../controller/seller_controller');

router.get('/', seller_Controller.list);
router.post('/', seller_Controller.insert);

router.get('/products/:sellerId', seller_Controller.findProductsBySellerId);
router.post('/products/', seller_Controller.addProductsBySellerId);

router.get('/products/edit/:productId', seller_Controller.getById);
router.patch('/products/edit/:productId', seller_Controller.patchById);
router.delete('/products/edit/:productId', seller_Controller.removeById);

router.get('/orders/:sellerId', seller_Controller.findOrderBySellerId);
router.get('/orders/edit/:orderId', seller_Controller.getOrderById);
router.patch('/orders/edit/:orderId', seller_Controller.changeOrderStatusShipped);
router.post('/orders/edit/:orderId', seller_Controller.changeOrderStatusDelivered);
router.put('/orders/edit/:orderId', seller_Controller.changeOrderStatusOnTheWay);
router.delete('/orders/edit/:orderId', seller_Controller.cancelOrder);
//router.put('/orders/edit/:status', seller_Controller);

//get by id
router.get('/:sellerId', seller_Controller.getById);
router.patch('/:sellerId', seller_Controller.patchById);
router.delete('/:sellerId', seller_Controller.removeById);



module.exports = router;