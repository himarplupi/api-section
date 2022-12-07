const Event = require('../.../models/event');

const createEvent = async (req, res) => {
  try {
    const { nama, tanggalEvent } = req.body;
    const event = await Event.create({
      nama: nama,
      tanggalEvent: tanggalEvent,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEvent,
};
