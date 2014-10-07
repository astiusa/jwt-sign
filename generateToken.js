#!/usr/bin/env node

'use strict';
var cli = require('cli');
var jwtSign = require('./index.js');

cli.parse({
  name:   ['n', 'Name of user'],
  read:   ['r', 'Read authorization'],
  write:  ['w', 'Write authorization'],
  secret: ['s', 'JWT secret']
});

cli.main(function (args, options) {
  var secret = process.env.JWT_SECRET;
  if (options.secret) {
    secret = options.secret;
  }

  this.output(jwtSign(options.name, options.read, options.write) + '\n');
});