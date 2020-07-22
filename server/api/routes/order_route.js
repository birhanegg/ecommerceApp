// const express = require('express');
// const router = express.Router();
//
// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Order were Fetched'
//     });
// });
//
// router.post('/', (req, res, next) => {
//    const order = {
//        productId: req.body.productId,
//        quantity: req.body.quantity
//    }
//     res.status(200).json({
//         message: 'Order were Created',
//         order: order
//     });
// });
//
// router.get('/:orderId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Order were Detail',
//         orderId: req.params.orderId
//     });
// });
//
// router.delete('/:orderId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Order were Deleted',
//         orderId: req.params.orderId
//     });
// });
//
// module.exports = router;




const express = require('express');
const router = express.Router();

const orderController = require('../controller/order_controller');

router.post('/:id', orderController.placeOrder);
router.get('/payment/:paymentToken', orderController.payBill);
//router.post('/' , orderController.insert);
//router.get('/:orderid', orderController.findOrder);
//router.delete('/:orderid' , orderController.removeOrder);


//router.patch('/:orderid', orderController.patchById);




//router.get('/order/:buyerId', orderController.findOrderByProductId);

module.exports = router;

















