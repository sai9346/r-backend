// backend/controllers/applicationController.js
const Application = require('../models/Application');
// src/controllers/applicationController.js

exports.getAllApplications = async (req, res) => {
    try {
      // Your logic to fetch all applications
    } catch (error) {
      res.status(500).json({ message: 'Error fetching applications' });
    }
  };
  
  exports.getApplicationById = async (req, res) => {
    const { id } = req.params;
    try {
      // Your logic to fetch application by ID
    } catch (error) {
      res.status(500).json({ message: `Error fetching application with ID ${id}` });
    }
  };
  
  exports.updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // Ensure body parsing middleware is used
    try {
      // Your logic to update application status
    } catch (error) {
      res.status(500).json({ message: `Error updating application with ID ${id}` });
    }
  };
  
  exports.deleteApplication = async (req, res) => {
    const { id } = req.params;
    try {
      // Your logic to delete application
    } catch (error) {
      res.status(500).json({ message: `Error deleting application with ID ${id}` });
    }
  };
  