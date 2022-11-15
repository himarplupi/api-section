const Users = require('../models/users');
const Event = require('../models/event');
const Absensi = require('../models/absensi');
const Submission = require('../models/submission');
const WhatsApp = require('../models/whatsApp');

const models = [Users, Event, Submission, WhatsApp, Absensi];

models.map(model => {
  model
    .sync({ force: true })
    .then(() => {
      console.log(`${model.name} table created`);
    })
    .catch(err => {
      console.log(err);
    });
});
