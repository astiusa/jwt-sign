'use strict';

var jwt = require('jsonwebtoken');
var jwtKey = process.env.JWT_SECRET;

module.exports = function signJWT(name, canWrite, canRead) {
  var claims = { };

  if(isDefined(name)) {
    claims.name = name;
  }

  if(isDefined(canWrite)) {
    claims.canWrite = canWrite;
  }

  if(isDefined(canRead)) {
    claims.canRead = canRead;
  }

  var options = {
    issuer: 'ASTi'
  };

  return jwt.sign(claims, jwtKey, options);
};

function isDefined(obj) {
  return typeof obj !== 'undefined';
}