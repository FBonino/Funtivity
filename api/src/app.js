const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes/');
const cors = require('cors');

require('./db.js');

const server = express();

server.name = 'API';

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());

server.use(router);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
