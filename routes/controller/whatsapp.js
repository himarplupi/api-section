const WhatsApp = require('../../models/whatsapp');

// Controller Create a new whatsapp
const createWhatsapp = async (req, res) => {
  const { name, link } = req.body;
  try {
    await WhatsApp.create({
      name,
      link,
    });
    res.status(201).json({ message: 'Whatsapp created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller Get all whatsapp
const getWhatsapp = async (req, res) => {
  try {
    const whatsapp = await WhatsApp.findAll();
    res.status(200).json(whatsapp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller Get whatsapp by id
const getWhatsappId = async (req, res) => {
  try {
    const { id } = req.params;
    const whatsapp = await WhatsApp.findOne({ where: { id } });
    if (whatsapp) {
      return res.status(200).json(whatsapp);
    }
    res.status(404).json({ error: 'Whatsapp not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller Update whatsapp by id
const updateWhatsappId = async (req, res) => {
  try {
    const { id } = req.params;
    const whatsapp = await WhatsApp.findOne({ where: { id } });
    if (whatsapp) {
      whatsapp.active = !whatsapp.active;
      await whatsapp.save();
      return res.status(200).json(whatsapp);
    }
    res.status(404).json({ error: 'Whatsapp not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createWhatsapp,
  getWhatsapp,
  getWhatsappId,
  updateWhatsappId,
};
