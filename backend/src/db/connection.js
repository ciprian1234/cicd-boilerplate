const mongoose = require('mongoose');
const { DB_CONNECTION_URI } = require('../config');

async function connectToDatabase() {
  await mongoose.connect(DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: false,
    useCreateIndex: true
  });

  console.log(`Connected to MongoDB: ${DB_CONNECTION_URI}`);
  return mongoose.connection;
}

module.exports = { connectToDatabase };
