'use strict';

const Fastify = require('fastify');
const availableForRouter = require('./routes/availableForRoutes');
const dataSetRouter = require('./routes/dataSetsRoutes');

const app = Fastify({
  logger: true,
});

app.register(dataSetRouter, { prefix: '/api/v1/dataSets' });
app.register(availableForRouter, { prefix: '/api/v1/availableFor' });

module.exports = app;
