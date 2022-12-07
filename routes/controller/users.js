const bcrypt = require('bcrypt');

const Users = require('../../models/users');
const Whatsapp = require('../../models/whatsapp');
// Controller Create a new user
const createUser = async (req, res) => {
  const { name, email, password, jk, noWhatsapp, institusi, fakultas } =
    req.body;
  var wa = '';
  try {
    if (
      !name ||
      !email ||
      !password ||
      !jk ||
      !noWhatsapp ||
      !institusi ||
      !fakultas
    ) {
      return res.status(400).json({ error: 'Please fill all field' });
    }
    // check email
    const _user = await Users.findOne({ where: { email } });
    if (_user) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await Users.create({
      name,
      email,
      password: hash,
      jk,
      noWhatsapp,
      institusi,
      fakultas,
    });
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;

    if (url.split('/').pop() === 'seminar') {
      wa = await Whatsapp.findOne({ where: { id: 1 } });
    } else if (url.split('/').pop() === 'bootcamp') {
      wa = await Whatsapp.findOne({ where: { id: 3 } });
    } else {
      wa = await Whatsapp.findOne({ where: { id: 2 } });
    }

    res.status(201).json({
      message: 'User created successfully',
      user,
      link: wa.link,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller Get all users
const getUsers = async (req, res) => {
  try {
    //   get url path
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Controller Get user by id
const getUsersId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({ where: { id } });
    if (user) {
      return res.status(200).json(user);
    }
    res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller Get user by email
const getUsersEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Users.findOne({ where: { email } });
    if (user) {
      return res.status(200).json(user);
    }
    res.status(404).json({ error: 'User not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUsersId,
  getUsersEmail,
};
