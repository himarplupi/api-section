// create routes for users
const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  getUsersId,
  getUsersEmail,
} = require('./controller/users');

router.post('/daftar', createUser);
router.get('/', getUsers);
router.get('/:id', getUsersId);
router.get('/:email', getUsersEmail);

module.exports = router;
