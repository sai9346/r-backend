const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: Number, required: true },
  skills: [{ type: String, required: true }],
});

module.exports = mongoose.model('Candidate', CandidateSchema);
