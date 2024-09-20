const Candidate = require('../models/Candidate');

// Get all candidates
exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new candidate
exports.createCandidate = async (req, res) => {
  const { name, location, experience, skills } = req.body;
  try {
    const newCandidate = new Candidate({ name, location, experience, skills });
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a candidate by ID
exports.updateCandidate = async (req, res) => {
  const { id } = req.params;
  const { name, location, experience, skills } = req.body;
  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(id, { name, location, experience, skills }, { new: true });
    if (!updatedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.json(updatedCandidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a candidate by ID
exports.deleteCandidate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCandidate = await Candidate.findByIdAndDelete(id);
    if (!deletedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
