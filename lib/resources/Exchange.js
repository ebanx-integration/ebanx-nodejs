/* Copyright 2015 EBANX */
'use strict';

function exchange(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/exchange";

  validator.params = params;
  validator.validatePresence("currency_code");

  var config = {
    uri : uri,
    method : method
  };

  client.send(config, params, function(err , reply) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,reply);
    }
  });
}

module.exports = exchange;