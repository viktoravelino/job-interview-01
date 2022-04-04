const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  textField: String,
});

module.exports = mongoose.model('Applicant', applicantSchema);
