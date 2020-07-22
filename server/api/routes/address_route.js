const express = require('express');
const router = express.Router();

const address_Controller = require('../controller/address_controller');

router.get('/', address_Controller.list);
router.post('/', address_Controller.insert);

//if u have agg put here

//get by id
// router.get('/:reviewId', address_Controller.getById);
// router.patch('/:reviewId', address_Controller.patchById);
// router.delete('/:reviewId', address_Controller.removeById);

// router.get('/productReview/:productId', address_Controller.findReviewByProductId);


module.exports = router;