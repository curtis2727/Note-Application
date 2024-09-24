const express = require('express');
const passport = require('passport');
const { register, login, logout } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', passport.authenticate('local'), login);
router.get('/logout', logout);

module.exports = router;
