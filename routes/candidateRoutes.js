const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

// Define routes
router.get('/', candidateController.getAllCandidates);
router.post('/', candidateController.createCandidate);
router.put('/:id', candidateController.updateCandidate);
router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;
