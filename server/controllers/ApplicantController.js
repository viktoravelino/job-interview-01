const Applicant = require('../entities/Applicant');

class ApplicantController {
  async findlAll() {
    return await Applicant.find();
  }

  async saveNewApplicant(fullName, email, textField) {
    const applicant = new Applicant({ fullName, email, textField });
    return await applicant.save();
  }
}

module.exports = {
  ApplicantController,
};
