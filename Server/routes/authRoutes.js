const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authControllers');
require('dotenv').config();

router.post('/login',authController.log_in_post);
router.post('/signup',authController.sign_up_post)

module.exports = router;