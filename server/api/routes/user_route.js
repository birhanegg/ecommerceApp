const express = require('express');
const router = express.Router();

const user_Controller = require('../controller/user_controller');

router.get('/', user_Controller.list);
router.post('/', user_Controller.insert);

// router.get('findstatus/:userId', user_Controller.getSellerStatusByUserId);

//get by id
router.get('/:sellerId', user_Controller.getById);
router.patch('/:sellerId', user_Controller.patchById);
router.delete('/:sellerId', user_Controller.removeById);

router.get('/status/:userId', user_Controller.getstatusById);
module.exports = router;