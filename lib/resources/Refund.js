/* Copyright 2015 EBANX */
'use strict';

function refund(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "POST";
  var uri = "ws/refund";

  validator.params = params;
  validator.validatePresence("operation");

  if (params.operation === "request") {
    validator.validatePresence("hash");
    validator.validatePresence("amount");
    validator.validatePresence("description");

  } else {
    validator.validatePresenceOr("merchant_refund_code","refund_id");
  }
  
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

module.exports = refund;