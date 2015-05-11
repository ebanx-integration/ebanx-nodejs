/* Copyright 2015 EBANX */
'use strict';

function query(params, callback) {
  var client = require("../http/Client");
  var validator = require("./Validator");
  var method = "GET";
  var uri = "ws/query";

  validator.params = params;
  validator.validatePresenceOr("hash","merchant_payment_code");
    
  var options = {
    uri : uri,
    method : method,
    params : {
      hash : params.hash,
      merchant_payment_code : params.merchant_payment_code
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

module.exports = query;