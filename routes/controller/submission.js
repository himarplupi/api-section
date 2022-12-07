const Submission = require('../../models/submission');
const Users = require('../../models/users');

const getAllSubmission = async (req, res) => {
  try {
    const submissions = await Submission.findAll();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(404).json(error.error.message);
  }
};

const createSubmission = async (req, res) => {
  try {
    const { email, link } = req.body();
    const _user = Users.findOne({ where: { email } });
    // create submission
    const submission = Submission.create({
      idUser: _user.id,
      link: link,
    });
    res.status(200).json(submission);
  } catch (error) {
    res.status(404).json(error.error.message);
  }
};

module.exports = {
  getAllSubmission,
  createSubmission,
};
