// routes/jobPostingRoutes.js
const express = require('express');
const router = express.Router();
const jobPostingController = require('../controllers/jobPostingController');

// Route to get all job postings
router.get('/', jobPostingController.getAllJobs);

// Route to create a new job posting
router.post('/', jobPostingController.createJobPost);

// Route to update a specific job posting by ID
router.put('/"id', jobPostingController.updateJobPost);

// Route to delete a specific job posting by ID
router.delete('/:id', jobPostingController.deleteJobPost);

module.exports = router;
