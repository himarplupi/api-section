const Event = require('../models/event');
const WhatsApp = require('../models/whatsApp');

const seed = async () => {
  try {
    await Event.bulkCreate([
      {
        name: 'Seminar SECTION Vol. 3',
        tanggalEvent: new Date('2022-12-11'),
        active: true,
      },
      {
        name: 'Bootcamp Section Vol. 3',
        tanggalEvent: new Date('2023-01-02'),
        active: true,
      },
      {
        name: 'Competition SECTION Vol. 3',
        tanggalEvent: new Date('2023-01-09'),
        active: true,
      },
    ]);
  } catch (err) {
    console.log(err);
  }

  try {
    await WhatsApp.bulkCreate([
      {
        name: 'Semianr SECTION Vol. 3',
        link: 'https://chat.whatsapp.com/EfgQbezfZ817laVyS811kR',
        active: true,
      },
      {
        name: 'Competition SECTION Vol. 3',
        link: 'https://chat.whatsapp.com/EmkKYfDQz766gtWOQtiabi',
        active: true,
      },
      {
        name: 'Bootcamp SECTION Vol. 3',
        link: 'https://chat.whatsapp.com/K1AApRQUt307m3w1X5zD0y',
        active: true,
      },
    ]);
  } catch (err) {
    console.log(err);
  }
};

seed();
