// controllers/interviewScheduleController.js
const InterviewSchedule = require('../models/InterviewSchedule');

// Schedule an interview
exports.scheduleInterview = async (req, res) => {
  const { candidateId, jobId, date, time } = req.body;
  try {
    const newInterview = new InterviewSchedule({ candidateId, jobId, date, time });
    await newInterview.save();
    res.status(201).json(newInterview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Other methods can be added similarly
