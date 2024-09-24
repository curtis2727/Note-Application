const express = require('express');
const passport = require('passport');
const noteController = require('../controllers/noteController');
const router = express.Router();

router.post('/', passport.authenticate('local', { session: false }), noteController.createNote);
router.get('/', passport.authenticate('local', { session: false }), noteController.getNotes);

module.exports = router;
