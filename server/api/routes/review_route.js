const express = require('express');
const router = express.Router();

const review_Controller = require('../controller/review_controller');

router.get('/', review_Controller.list);
router.post('/', review_Controller.insert);

//if u have agg put here

//get by id
router.get('/:reviewId', review_Controller.getById);
router.patch('/:reviewId', review_Controller.patchById);
router.delete('/:reviewId', review_Controller.removeById);

router.get('/productReview/:productId', review_Controller.findReviewByProductId);


module.exports = router;