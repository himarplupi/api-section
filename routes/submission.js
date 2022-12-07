const express = require('express');
const router = express.Router();

const {
  getAllSubmission,
  createSubmission,
} = require('./controller/submission');

router.get('/', getAllSubmission);
router.post('/', createSubmission);

module.exports = router;
