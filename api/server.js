const express = require('express');


const hubsRouter = require('../hubs/hubs-router.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});



// REQUESTS to routes that being with /api/hubs
server.use('/api/hubs', hubsRouter)


module.exports = server