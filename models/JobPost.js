// models/JobPost.js
const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: Number, required: true },
  // other fields as necessary
});

module.exports = mongoose.model('JobPost', JobPostSchema);
