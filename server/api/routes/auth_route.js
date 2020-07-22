/**
 * MWA Project  
 * Online shopping application 
 * Since june 10
 * Team-6 
 * Description : authentication & athorization: login/logout and resource control
 */

const express = require('express');
const router = express.Router();
const authController = require('../controller/auth_controller');

router.post('/signin', authController.signin);

module.exports = router;