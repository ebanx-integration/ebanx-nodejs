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
  
  var options = {
    uri : uri,
    method : method,
    params: {
      operation : params.operation,
      hash : params.hash,
      amount : params.amount,
      description : params.description,
      merchant_refund_code : params.merchant_refund_code,
      refund_id : params.refund_id
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

module.exports = refund;