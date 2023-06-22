'use strict'

const mongoose = require('mongoose');

const URI = `mongodb+srv://devmaster:devmaster@cluster0.wemyr6w.mongodb.net/api_contas?retryWrites=true&w=majority`;

let db;

module.exports = {
  connect: async () => {
    db = await mongoose.connect(
      URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
      .then(() => console.log('Database is connected'))
      .catch(err => console.error('ERRO ao tentar conectar no banco: ', err));
  },

  getDB: () => db,
};