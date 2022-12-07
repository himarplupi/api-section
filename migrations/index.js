const {
  User_Seminar,
  User_BootCamp,
  User_Competion,
} = require('../models/users');
const Event = require('../models/event');
const Absensi = require('../models/absensi');
const Submission = require('../models/submission');
const WhatsApp = require('../models/whatsApp');

const models = [
  User_BootCamp,
  User_Competion,
  User_Seminar,
  Event,
  Submission,
  WhatsApp,
  Absensi,
];

models.map(model => {
  model
    .sync({ force: true, debug: false })
    .then(() => {})
    .catch(err => {
      console.log(err);
    });
});
