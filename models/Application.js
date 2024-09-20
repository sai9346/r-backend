// models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPost', required: true },
  status: { type: String, default: 'Applied' },
  // other fields as necessary
});

module.exports = mongoose.model('Application', ApplicationSchema);
