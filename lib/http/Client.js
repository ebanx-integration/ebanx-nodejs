/* Copyright 2015 EBANX */
'use strict';

var config = require("../Config");
var validator = require("../resources/Validator");
var Client = function () {};

Client.prototype.send = function (options, callback) {
  var url = config.getEndPoint() + options.uri;
  var method = options.method;

  if (!config.usingHttp) {
    callback(null, options);
  } else {
    var req = require("request");
    validator.validateConfig(config);
    options.params.integration_key = config.integrationKey;

    // If is Direct operation, change some parameters
    if (options.direct) {
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