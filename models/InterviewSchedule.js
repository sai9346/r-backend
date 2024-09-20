// models/InterviewSchedule.js
const mongoose = require('mongoose');

const InterviewScheduleSchema = new mongoose.Schema({
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPost', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  // other fields as necessary
});

module.exports = mongoose.model('InterviewSchedule', InterviewScheduleSchema);
