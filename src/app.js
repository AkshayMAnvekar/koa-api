'use strict';

var app = require('koa')();
var config = require('./config');
var helmet = require('koa-helmet');
var json = require('koa-json');
var logger = require('koa-morgan').middleware;
var middleware = require('./middleware');
var router = require('./routes');

app.use(logger(config.logging.format));
app.use(helmet());
app.use(json(config.json));
app.use(middleware.config);
app.use(middleware.models);
app.use(router.routes());

module.exports = app;
