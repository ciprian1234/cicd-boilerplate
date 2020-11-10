const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = require('./config');
const apiRouter = require('./api');
const { connectToDatabase } = require('./db/connection');

async function main() {
  console.log('NODE_ENV:', process.env.NODE_ENV);

  console.log('Connecting to database...');
  await connectToDatabase();

  // create express instance
  const app = express();

  // midleware
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));

  // routes
  app.get('', (req, res) => res.send('Welcome to the backend!'));
  app.use('/api', apiRouter);
  app.use((req, res, next) => res.status(404).json({ error: 'Not Found!' }));

  // start the server
  app.listen(PORT, () => console.log(`Server is listening on: http://127.0.0.1:${PORT}/`));
}

main();
