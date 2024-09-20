// routes/interviewScheduleRoutes.js
const express = require('express');
const router = express.Router();
const interviewScheduleController = require('../controllers/interviewScheduleController');

router.post('/', interviewScheduleController.scheduleInterview);
// Other routes can be added similarly

module.exports = router;
