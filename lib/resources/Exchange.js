/* Copyright 2015 EBANX */
'use strict';

function exchange(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/exchange";

  validator.params = params;
  validator.validatePresence("currency_code");

  var options = {
    uri : uri,
    method : method,
    params : {
      currency_code : params.currency_code,
      currency_base : params.currency_base
    }
  };

  client.send(options, function(err , reply) {
    if(err) {
      callback(err, null);
    } else {
      callback(null,reply);
    }
  });
}

module.exports = exchange;