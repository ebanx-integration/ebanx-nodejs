/* Copyright 2015 EBANX */
'use strict';

var config = require("../Config");
var validator = require("../resources/Validator");
var constructor = require('../resources/Constructor');
var Client = function () {};

Client.prototype.send = function (options, params, callback) {
  var url = config.getEndPoint() + options.uri;
  var method = options.method;
  var data = {};

  for (var i in params) {
    constructor(data, i, params[i]);
  }

  if (!config.usingHttp) {
    for (var i in options) {
      constructor(data, i, options[i]);
    }
    callback(null, data);
  } else {
    var req = require("request");
    validator.validateConfig(config);

    options.params = data;
    options.params.integration_key = config.integrationKey;

    // If is Direct operation, change some parameters
    if (options.direct) {
      options.params.operation = "request";
      var request = { request_body : JSON.stringify(options.params)};

      req({
        url: url,
        headers: {
          'User-Agent': 'EBANX NodeJS Module Direct'
        },
        method: method,
        form : request
      }, function(error, response, body) {
        if (error) {
          throw new Error(error);
        } else {
          callback(null, body);
        }
      });
    }	else {
      req({
        url: url,
        headers: {
          'User-Agent': 'EBANX NodeJS Module'
        },
        method: method,
        qs : options.params
      }, function(error, response, body) {
        if (error) {
          throw new Error(error);
        } else {
          callback(null, body);
        }
      });
    }
  }
};

module.exports = new Client();