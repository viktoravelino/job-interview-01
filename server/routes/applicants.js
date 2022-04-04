// import axios from "axios";
const { Router } = require('express');
const { ApplicantController } = require('../controllers/ApplicantController');
const Applicant = require('../entities/Applicant');

const applicants = Router();

module.exports = { applicants };

const applicantController = new ApplicantController();

applicants
  .route('/applicants')
  .get(async (_req, res) => {
    const applicants = await applicantController.findlAll();
    res.send(applicants);
  })
  .post(async (req, res) => {
    const { fullName, email, textField } = req.body;
    const applicant = await applicantController.saveNewApplicant(
      fullName,
      email,
      textField
    );
    res.send({ applicant });
  });
