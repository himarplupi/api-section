const bcrypt = require('bcrypt');

const {
  User_BootCamp,
  User_Competion,
  User_Seminar,
} = require('../../models/users');
const Whatsapp = require('../../models/whatsapp');
// Controller Create a new user
const createUser = async (req, res) => {
  const { name, email, password, jk, noWhatsapp, institusi, fakultas } =
    req.body;
  var wa,
    user = null;
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

    const hash = await bcrypt.hash(password, 10);
    if (url.split('/').pop() === 'seminar') {
      const _user = await User_Seminar.findOne({ where: { email } });
      if (_user) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      wa = await Whatsapp.findOne({ where: { id: 1 } });
      const user = await User_Seminar.create({
        name,
        email,
        password: hash,
        jk,
        noWhatsapp,
        institusi,
        fakultas,
      });
    } else if (url.split('/').pop() === 'bootcamp') {
      const _user = await User_BootCamp.findOne({ where: { email } });
      if (_user) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      wa = await Whatsapp.findOne({ where: { id: 3 } });
      const user = await User_BootCamp.create({
        name,
        email,
        password: hash,
        jk,
        noWhatsapp,
        institusi,
        fakultas,
      });
      await User_Competion.create({
        name,
        email,
        password: hash,
        jk,
        noWhatsapp,
        institusi,
        fakultas,
      });
    } else {
      wa = await Whatsapp.findOne({ where: { id: 2 } });
      const _user = await User_Competion.findOne({ where: { email } });
      if (_user) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      const user = await User_Competion.create({
        name,
        email,
        password: hash,
        jk,
        noWhatsapp,
        institusi,
        fakultas,
      });
    }

    const url = req.protocol + '://' + req.get('host') + req.originalUrl;

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
    const users = await User_BootCamp.findAll();
    res.status(200).json(users);
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
  getUsersEmail,
};
