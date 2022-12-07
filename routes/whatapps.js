const express = require('express');
const {
  createWhatsapp,
  getWhatsapp,
  getWhatsappId,
  updateWhatsappId,
} = require('./controller/whatsapp');

const router = express.Router();

router.post('/create', createWhatsapp);
router.get('/', getWhatsapp);
router.get('/:id', getWhatsappId);
router.put('/:id', updateWhatsappId);

module.exports = router;
