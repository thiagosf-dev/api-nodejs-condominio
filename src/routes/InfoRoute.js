'use strict'

const express = require('express');
const router = express.Router();

router.get('', (request, response) => {
  response.json({
    message: 'API de Gerenciamento de Condomínio',
    status: 'OK',
  });
});

module.exports = router;