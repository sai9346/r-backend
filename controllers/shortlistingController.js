// controllers/shortlistingController.js
const Application = require('../models/Application');

// Shortlist a candidate
exports.shortlistCandidate = async (req, res) => {
  const { applicationId } = req.params;
  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: 'Application not found' });

    application.status = 'Shortlisted';
    await application.save();
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other methods can be added similarly
// Reject a candidate
exports.rejectCandidate = async (req, res) => {
  const { applicationId } = req.params;
  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: 'Application not found' });

    application.status = 'Rejected';
    await application.save();
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};