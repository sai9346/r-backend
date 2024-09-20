// routes/shortlistingRoutes.js
const express = require('express');
const router = express.Router();
const shortlistingController = require('../controllers/shortlistingController');

router.patch('/', shortlistingController.shortlistCandidate);
// Other routes can be added similarly
router.patch('/reject', shortlistingController.rejectCandidate);

module.exports = router;
