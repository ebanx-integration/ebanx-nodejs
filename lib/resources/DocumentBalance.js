/* Copyright 2015 EBANX */
'use strict';

function cancel(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/documentbalance";

  validator.params = params;
  validator.validatePresence("currency_code");
  validator.validatePresence("document");

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

module.exports = cancel;