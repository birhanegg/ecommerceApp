const express = require('express');
const router = express.Router();

const admin_Controller = require('../controller/admin_controller');

router.get('/pendingReviews', admin_Controller.viewPendingReviews);
router.post('/pendingReviews/:reviewId', admin_Controller.postReview);
router.delete('/pendingReviews/:reviewId', admin_Controller.declineReview);

router.get('/pendingSellers', admin_Controller.viewPendingSellers);
router.get('/pendingSellers/:userId', admin_Controller.viewSellerByUserId);
router.post('/pendingSellers/:sellerId', admin_Controller.aceptSeller);
router.delete('/pendingSellers/:sellerId', admin_Controller.denySeller);

module.exports = router;