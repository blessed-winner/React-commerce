const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authControllers');
require('dotenv').config();

router.post('/login',authController.log_in_post);
router.post('/signup',authController.sign_up_post);
router.post('/logout',authController.log_out_post);
router.get('/verify',authController.verify_get);

module.exports = router;