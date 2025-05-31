const express = require('express');
const authControlles = require('../controllers/authController');

const router = express.Router();

// ✅ Fix the route paths
router.post('/signup', authControlles.signup);
router.post('/login', authControlles.login);
router.post('/logout', authControlles.logout);

module.exports = router;
