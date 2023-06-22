'use strict'

require('./database').connect();
const express = require('express');
const infoRoute = require('./routes/InfoRoute');

const api = express();

const PORT = 3000;

// registrando rotas
api.use('/info', infoRoute);

api.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));