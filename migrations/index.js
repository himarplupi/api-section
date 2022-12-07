const Users = require('../models/users');
const Event = require('../models/event');
const Absensi = require('../models/absensi');
const Submission = require('../models/submission');
const WhatsApp = require('../models/whatsApp');

const models = [Users, Event, Submission, WhatsApp, Absensi];

models.map(model => {
  model
    .sync({ force: true, debug: false })
    .then(() => {})
    .catch(err => {
      console.log(err);
    });
});
