// controllers/jobPostingController.js
const JobPost = require('../models/JobPost');

// Get all job posts
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await JobPost.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new job post
exports.createJobPost = async (req, res) => {
  const { title, description, location, experience } = req.body;
  try {
    const newJobPost = new JobPost({ title, description, location, experience });
    await newJobPost.save();
    res.status(201).json(newJobPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a job post by ID
exports.updateJobPost = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, experience } = req.body;
  try {
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      id,
      { title, description, location, experience },
      { new: true } // Return the updated document
    );
    if (!updatedJobPost) return res.status(404).json({ message: 'Job post not found' });
    res.json(updatedJobPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job post by ID
exports.deleteJobPost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJobPost = await JobPost.findByIdAndDelete(id);
    if (!deletedJobPost) return res.status(404).json({ message: 'Job post not found' });
    res.status(204).json(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
