const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// GET all applications
router.get('/', applicationController.getAllApplications);

// GET specific application by ID
router.get('/:id', applicationController.getApplicationById);

// PUT to update application status
router.put('/:id/status', applicationController.updateStatus);

// DELETE an application
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;
